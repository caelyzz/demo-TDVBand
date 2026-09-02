import { t, getLang } from './i18n';

export function initAudioSynth() {
  const eqEl = document.querySelector('#eq');
  const playBtn = document.querySelector('#playBtn');
  const playLabel = document.querySelector('#playLabel');
  const heroTitle = document.querySelector('#heroTitle');

  if (!eqEl || !playBtn) return;

  const BARS = 52;
  const bars: { el: HTMLSpanElement; v: number }[] = [];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Render visual equalizer bars
  eqEl.innerHTML = '';
  for (let i = 0; i < BARS; i++) {
    const b = document.createElement('span');
    b.style.opacity = (0.3 + Math.random() * 0.5).toFixed(2);
    eqEl.appendChild(b);
    bars.push({ el: b, v: 0.12 });
  }

  const BPM = 92;
  const STEP = 60 / BPM / 4;
  const CHORDS = [
    { bass: 110.0, tones: [220, 261.63, 329.63, 392] },
    { bass: 87.31, tones: [174.61, 220, 261.63, 329.63] },
    { bass: 130.81, tones: [261.63, 329.63, 392, 493.88] },
    { bass: 98.0, tones: [196, 246.94, 293.66, 349.23] },
  ];
  const MELODY: [number, number][] = [
    [0, 0],
    [3, 2],
    [6, 1],
    [10, 3],
    [12, 2],
    [14, 1],
  ];

  let actx: AudioContext | null = null;
  let master: GainNode | null = null;
  let analyser: AnalyserNode | null = null;
  let dry: GainNode | null = null;
  let delay: DelayNode | null = null;
  let send: GainNode | null = null;
  let noiseBuf: AudioBuffer | null = null;
  let freq: Uint8Array | null = null;

  let audioOn = false;
  let timer: ReturnType<typeof setInterval> | null = null;
  let step = 0;
  let nextT = 0;

  function buildAudio() {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    actx = new AudioCtx();
    master = actx.createGain();
    master.gain.value = 0;
    analyser = actx.createAnalyser();
    analyser.fftSize = 128;
    analyser.smoothingTimeConstant = 0.82;

    master.connect(analyser);
    analyser.connect(actx.destination);

    dry = actx.createGain();
    dry.connect(master);

    delay = actx.createDelay(1);
    delay.delayTime.value = STEP * 3;

    const fb = actx.createGain();
    fb.gain.value = 0.32;
    delay.connect(fb);
    fb.connect(delay);

    const wet = actx.createGain();
    wet.gain.value = 0.28;
    delay.connect(wet);
    wet.connect(master);

    send = actx.createGain();
    send.gain.value = 0.6;
    send.connect(delay);

    noiseBuf = actx.createBuffer(1, actx.sampleRate, actx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      d[i] = Math.random() * 2 - 1;
    }
    freq = new Uint8Array(analyser.frequencyBinCount);
  }

  function pluck(f: number, t: number, dur = 0.45, vol = 0.11) {
    if (!actx || !dry || !send) return;
    const o = actx.createOscillator();
    o.type = 'triangle';
    o.frequency.value = f;
    const lp = actx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 2400;
    const g = actx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(lp);
    lp.connect(g);
    g.connect(dry);
    g.connect(send);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  function bassNote(f: number, t: number, dur: number) {
    if (!actx || !dry) return;
    const o = actx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.value = f;
    const lp = actx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 300;
    lp.Q.value = 0.7;
    const g = actx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.2, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(lp);
    lp.connect(g);
    g.connect(dry);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  function kick(t: number) {
    if (!actx || !dry) return;
    const o = actx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(44, t + 0.12);
    const g = actx.createGain();
    g.gain.setValueAtTime(0.55, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o.connect(g);
    g.connect(dry);
    o.start(t);
    o.stop(t + 0.32);
  }

  function noise(t: number, type: BiquadFilterType, freqHz: number, vol: number, dur: number) {
    if (!actx || !dry || !noiseBuf) return;
    const src = actx.createBufferSource();
    src.buffer = noiseBuf;
    const f = actx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freqHz;
    const g = actx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(dry);
    src.start(t);
    src.stop(t + dur + 0.05);
  }

  function scheduleStep(gs: number, t: number) {
    const bar = Math.floor(gs / 16) % 4;
    const s = gs % 16;
    const ch = CHORDS[bar];

    if (s === 0 || s === 7 || s === 10) kick(t);
    if (s === 4 || s === 12) noise(t, 'bandpass', 1800, 0.3, 0.18);
    if (s % 2 === 0) noise(t, 'highpass', 7500, 0.08, 0.05);
    if (s === 0) bassNote(ch.bass, t, 0.5);
    if (s === 7) bassNote(ch.bass, t, 0.15);
    if (s === 10) bassNote(ch.bass, t, 0.32);

    const ev = MELODY.find((e) => e[0] === s);
    if (ev) pluck(ch.tones[ev[1]], t);
    if (s === 0) pluck(ch.tones[3] * 2, t + 0.03, 0.6, 0.05);
  }

  function scheduler() {
    if (!actx) return;
    while (nextT < actx.currentTime + 0.15) {
      scheduleStep(step, nextT);
      nextT += STEP;
      step = (step + 1) % 64;
    }
  }

  function updatePlayLabel() {
    if (!playLabel) return;
    playLabel.textContent = audioOn ? t('hero.pause') : t('hero.play');
  }

  playBtn.addEventListener('click', async () => {
    if (!actx) buildAudio();
    if (!actx || !master) return;

    if (!audioOn) {
      await actx.resume();
      const now = actx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(0, now);
      master.gain.linearRampToValueAtTime(0.9, now + 0.4);
      step = 0;
      nextT = now + 0.08;
      timer = setInterval(scheduler, 30);
      scheduler();
      audioOn = true;
      document.body.classList.add('is-playing');
      updatePlayLabel();
    } else {
      const now = actx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);
      master.gain.linearRampToValueAtTime(0, now + 0.25);
      if (timer) clearInterval(timer);
      audioOn = false;
      document.body.classList.remove('is-playing');
      updatePlayLabel();
      setTimeout(() => actx?.suspend(), 400);
    }
  });

  window.addEventListener('languagechange', () => {
    updatePlayLabel();
  });

  (function eqLoop(t: number) {
    let target: number;
    for (let i = 0; i < BARS; i++) {
      if (audioOn && analyser && freq) {
        (analyser as AnalyserNode).getByteFrequencyData(freq);
        const bin = Math.floor(Math.pow((i + 1) / BARS, 1.7) * 44);
        target = Math.min(1, (freq[bin] / 255) * 1.15);
      } else {
        target = 0.16 + 0.13 * Math.sin(t / 900 + i * 0.38) + 0.05 * Math.sin(t / 430 + i * 0.9);
      }
      const b = bars[i];
      b.v += (target - b.v) * 0.28;
      b.el.style.transform = `scaleY(${Math.max(0.05, b.v)})`;
    }
    requestAnimationFrame(eqLoop);
  })(0);

  if (reduced) {
    bars.forEach((b) => (b.el.style.transform = 'scaleY(.25)'));
  }

  if (heroTitle) {
    const letterNotes = [
      261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66,
    ];
    let lastBlip = 0;
    heroTitle.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement | null;
      const lt = target?.closest('.lt');
      if (!lt || !actx || !audioOn) return;
      const now = performance.now();
      if (now - lastBlip < 70) return;
      lastBlip = now;
      const idx = [...heroTitle.querySelectorAll('.lt')].indexOf(lt);
      if (idx > -1) pluck(letterNotes[idx % letterNotes.length], actx.currentTime + 0.01, 0.35, 0.09);
    });
  }
}
