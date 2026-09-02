/**
 * Main DOM interactions and animations for Tradevis Band (with i18n support)
 */
import { t, getLang } from './i18n';

export function initInteractions() {
  const $ = <T extends HTMLElement = HTMLElement>(s: string): T | null => document.querySelector(s);
  const $$ = <T extends HTMLElement = HTMLElement>(s: string): T[] => Array.from(document.querySelectorAll(s));
  const fine = window.matchMedia('(pointer:fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize Lucide icons if available
  const win = window as unknown as { lucide?: { createIcons: () => void } };
  if (win.lucide) {
    win.lucide.createIcons();
  }

  /* ================= I18N DOM BILINGUAL ATTRIBUTES UPDATER ================= */
  function updateBilingualElements() {
    const lang = getLang();

    // Elements with data-en and data-id
    $$<HTMLElement>('[data-en][data-id]').forEach((el) => {
      const val = lang === 'en' ? el.dataset.en : el.dataset.id;
      if (val !== undefined) {
        el.innerHTML = val;
      }
    });

    // Gallery items caption attributes
    $$<HTMLElement>('.g-item').forEach((el) => {
      const cap = lang === 'en' ? el.dataset.capEn : el.dataset.capId;
      if (cap) {
        el.dataset.cap = cap;
      }
      const img = el.querySelector('img');
      if (img) {
        const alt = lang === 'en' ? img.dataset.altEn : img.dataset.altId;
        if (alt) img.alt = alt;
      }
    });

    // Remind buttons dataset event name
    $$<HTMLElement>('.remind').forEach((el) => {
      const evName = lang === 'en' ? el.dataset.evEn : el.dataset.evId;
      if (evName) {
        el.dataset.ev = evName;
      }
    });

    // Select options
    $$<HTMLOptionElement>('#f-divisi option').forEach((opt) => {
      const val = lang === 'en' ? opt.dataset.en : opt.dataset.id;
      if (val) {
        opt.textContent = val;
        opt.value = val;
      }
    });
  }

  window.addEventListener('languagechange', () => {
    updateBilingualElements();
  });
  updateBilingualElements();

  /* ================= PRELOADER ================= */
  const loader = $('#loader');
  function exitLoader() {
    if (!loader || document.body.classList.contains('ready')) return;
    loader.classList.add('done');
    document.body.classList.add('ready');
    setTimeout(() => loader.remove(), 900);
  }

  if (document.readyState === 'complete') {
    setTimeout(exitLoader, 900);
  } else {
    window.addEventListener('load', () => setTimeout(exitLoader, 900));
  }
  setTimeout(exitLoader, 3500);

  /* ================= CUSTOM CURSOR ================= */
  const dot = $('#cursorDot');
  const ring = $('#cursorRing');
  if (fine && !reduced && dot && ring) {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let seen = false;

    window.addEventListener('mousemove', (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      if (!seen) {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        seen = true;
      }
    });

    (function ringLoop() {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(ringLoop);
    })();

    const hoverSel = 'a, button, .g-item, .div-tab-btn, .hud-arrow-btn, .spec-box, .stage-frame, .ev-head, input, select, textarea, .lt';
    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(hoverSel)) document.body.classList.add('cursor-hover');
    });
    document.addEventListener('mouseout', (e) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest(hoverSel)) document.body.classList.remove('cursor-hover');
    });
  }

  /* ================= SCROLL: Progress, Navbar, Parallax ================= */
  const progress = $('#progress');
  const heroInner = $('#heroInner');
  const heroBg = $('#heroBg');
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) {
      progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    }
    document.body.classList.toggle('scrolled', y > 40);
    document.body.classList.toggle('show-top', y > 700);

    if (y < window.innerHeight) {
      if (heroInner) {
        heroInner.style.transform = `translateY(${y * 0.28}px)`;
        heroInner.style.opacity = String(Math.max(0, 1 - y / 620));
      }
      if (heroBg) {
        heroBg.style.transform = `translateY(${y * 0.12}px)`;
      }
    }
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
  onScroll();

  /* ================= ACTIVE NAV LINK SPY ================= */
  const navLinks = $$('.nav-link');
  const secIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          navLinks.forEach((l) =>
            l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id)
          );
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  ['tentang', 'divisi', 'galeri', 'agenda', 'perjalanan', 'gabung'].forEach((id) => {
    const s = document.getElementById(id);
    if (s) secIO.observe(s);
  });

  /* ================= TEXT SPLIT & COUNTER REVEAL ================= */
  $$('.split').forEach((el) => {
    const words = (el.textContent || '').trim().split(/\s+/);
    el.innerHTML = words
      .map(
        (w, i) => `<span class="w-mask"><span class="w-in" style="--d:${i * 90}ms">${w}</span></span>`
      )
      .join(' ');
  });

  function runCounter(el: HTMLElement) {
    const target = +(el.dataset.count || 0);
    const suffix = el.dataset.suffix || '';
    const dur = 1500;
    const t0 = performance.now();
    (function tick(t) {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(target * e) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        const targetEl = en.target as HTMLElement;
        if (targetEl.dataset.count) runCounter(targetEl);
        targetEl.querySelectorAll<HTMLElement>('[data-count]').forEach(runCounter);
        io.unobserve(en.target);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -6%' }
  );
  $$('[data-reveal]').forEach((el) => io.observe(el));

  /* ================= HERO PARALLAX ================= */
  const hero = $('#hero');
  const heroTitle = $('#heroTitle');
  const doodles = $$<HTMLElement>('.doodle');

  if (fine && !reduced && hero && heroTitle) {
    let mx = 0;
    let my = 0;
    let cmx = 0;
    let cmy = 0;

    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    });

    hero.addEventListener('mouseleave', () => {
      mx = 0;
      my = 0;
    });

    (function mLoop() {
      cmx += (mx - cmx) * 0.06;
      cmy += (my - cmy) * 0.06;
      doodles.forEach((d) => {
        const dep = +(d.dataset.depth || 1);
        d.style.transform = `translate(${cmx * dep * 30}px, ${cmy * dep * 22}px)`;
      });
      heroTitle.style.transform = `translate(${cmx * 12}px, ${cmy * 9}px)`;
      requestAnimationFrame(mLoop);
    })();
  }

  if (heroTitle) {
    heroTitle.addEventListener('animationend', (e) => {
      const target = e.target as HTMLElement | null;
      if (target?.classList.contains('lt')) {
        target.style.animation = 'none';
      }
    });
  }

  /* ================= MARQUEE DUPLICATION ================= */
  $$('.marquee-track').forEach((t) => {
    const base = t.innerHTML;
    let n = 2;
    t.innerHTML = base.repeat(2);
    while (t.scrollWidth < window.innerWidth * 2.2 && n < 12) {
      n += 2;
      t.innerHTML = base.repeat(n);
    }
    t.style.animationDuration = 13 * n + 's';
  });

  /* ================= MAGNETIC BUTTONS ================= */
  if (fine && !reduced) {
    $$('.magnetic').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e as MouseEvent).clientX - (r.left + r.width / 2);
        const dy = (e as MouseEvent).clientY - (r.top + r.height / 2);
        el.style.transition = 'background .3s,color .3s,border-color .3s';
        el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transition =
          'transform .55s cubic-bezier(.2,.7,.3,1), background .3s, color .3s, border-color .3s';
        el.style.transform = '';
        setTimeout(() => {
          el.style.transition = '';
        }, 600);
      });
    });
  }

  /* ================= 3D CARD TILT ================= */
  if (fine && !reduced) {
    $$('[data-tilt]').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e as MouseEvent).clientX - r.left - r.width / 2;
        const py = (e as MouseEvent).clientY - r.top - r.height / 2;
        const nx = px / (r.width / 2);
        const ny = py / (r.height / 2);
        card.style.transition = 'transform .16s ease-out';
        card.style.transform =
          `perspective(800px) rotateX(${(-ny * 8).toFixed(2)}deg) rotateY(${(nx * 10).toFixed(2)}deg) ` +
          `rotate(var(--rot,0deg)) translateY(calc(var(--ty,0px) - 6px)) scale(1.03)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform .55s cubic-bezier(.2,.7,.3,1)';
        card.style.transform = 'rotate(var(--rot,0deg)) translateY(var(--ty,0px))';
      });
    });
  }

  /* ================= DIVISIONS PINNED HORIZONTAL SCROLL ================= */
  const divSection = $('#divisi');
  const divTrack = $('#divisionsTrack');
  const divSlides = $$<HTMLElement>('.division-slide');

  if (divSection && divTrack && divSlides.length > 0) {
    const totalSlides = divSlides.length;

    function updateDivisionsHorizontalScroll() {
      if (!divSection || !divTrack) return;
      const rect = divSection.getBoundingClientRect();
      const totalDist = divSection.offsetHeight - window.innerHeight;
      if (totalDist <= 0) return;

      // Scroll progress through pinned section: 0 to 1
      const progress = Math.max(0, Math.min(1, -rect.top / totalDist));
      
      // Track is 500% wide. To move 4 slides out of 5, we translate by 80% of the track's own width.
      const maxTranslatePercent = ((totalSlides - 1) / totalSlides) * 100;
      divTrack.style.transform = `translateX(-${progress * maxTranslatePercent}%)`;

      // Update active slide classes (optional, for triggering any CSS animations within slide)
      const activeIdx = Math.min(totalSlides - 1, Math.floor(progress * totalSlides + 0.1));
      divSlides.forEach((slide, i) => {
        slide.classList.toggle('active-slide', i === activeIdx);
      });
    }

    window.addEventListener(
      'scroll',
      () => {
        requestAnimationFrame(updateDivisionsHorizontalScroll);
      },
      { passive: true }
    );
    window.addEventListener('resize', updateDivisionsHorizontalScroll);
    updateDivisionsHorizontalScroll();
  }

  /* ================= LIGHTBOX MODAL ================= */
  const gItems = $$<HTMLElement>('.g-item');
  const lb = $('#lightbox');
  const lbImg = $('#lbImg') as HTMLImageElement | null;
  const lbCap = $('#lbCap');
  const lbCount = $('#lbCount');
  let lbIdx = 0;

  function setLb() {
    const it = gItems[lbIdx];
    if (!it || !lbImg || !lbCap || !lbCount) return;
    lbImg.src = it.dataset.full || '';
    const captionText = it.dataset.cap || '';
    lbImg.alt = captionText;
    lbCap.textContent = captionText;
    lbCount.textContent =
      String(lbIdx + 1).padStart(2, '0') + ' / ' + String(gItems.length).padStart(2, '0');
    lbImg.classList.remove('pop');
    void lbImg.offsetWidth;
    lbImg.classList.add('pop');
  }

  function openLb(i: number) {
    lbIdx = i;
    setLb();
    lb?.classList.add('open');
    document.documentElement.classList.add('locked');
  }

  function closeLb() {
    lb?.classList.remove('open');
    document.documentElement.classList.remove('locked');
  }

  function navLb(d: number) {
    lbIdx = (lbIdx + d + gItems.length) % gItems.length;
    setLb();
  }

  gItems.forEach((el, i) => {
    el.addEventListener('click', () => openLb(i));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLb(i);
      }
    });
  });

  $('#lbClose')?.addEventListener('click', closeLb);
  $('#lbPrev')?.addEventListener('click', () => navLb(-1));
  $('#lbNext')?.addEventListener('click', () => navLb(1));
  lb?.addEventListener('click', (e) => {
    if (e.target === lb) closeLb();
  });

  window.addEventListener('keydown', (e) => {
    if (!lb?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') navLb(-1);
    if (e.key === 'ArrowRight') navLb(1);
  });

  /* ================= AGENDA ACCORDION ================= */
  $$('.ev-head').forEach((h) =>
    h.addEventListener('click', () => {
      const ev = h.parentElement;
      if (!ev) return;
      const wasOpen = ev.classList.contains('open');
      $$('.event').forEach((x) => {
        x.classList.remove('open');
        x.querySelector('.ev-head')?.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        ev.classList.add('open');
        h.setAttribute('aria-expanded', 'true');
      }
    })
  );

  /* ================= TOASTS ================= */
  const toasts = $('#toasts');
  function toast(msg: string, icon = 'check') {
    if (!toasts) return;
    const tEl = document.createElement('div');
    tEl.className = 'toast';
    tEl.innerHTML = `<i data-lucide="${icon}"></i><span>${msg}</span>`;
    toasts.appendChild(tEl);
    if (win.lucide) win.lucide.createIcons();
    requestAnimationFrame(() => tEl.classList.add('show'));
    setTimeout(() => {
      tEl.classList.remove('show');
      setTimeout(() => tEl.remove(), 450);
    }, 4200);
  }

  $$<HTMLElement>('.remind').forEach((b) =>
    b.addEventListener('click', () => {
      const eventTitle = b.dataset.ev || '';
      const msg = t('agenda.toast_msg', { event: eventTitle });
      toast(msg, 'bell');
    })
  );

  $$<HTMLElement>('.soc[data-msg-key]').forEach((b) =>
    b.addEventListener('click', (e) => {
      e.preventDefault();
      const msgKey = b.dataset.msgKey;
      if (msgKey) {
        toast(t(msgKey), 'sparkles');
      }
    })
  );

  /* ================= CONFETTI CANVAS ================= */
  const cv = $('#confetti') as HTMLCanvasElement | null;
  const c2 = cv?.getContext('2d');
  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    rot: number;
    vr: number;
    s: number;
    type: number;
    c: string;
    life: number;
  }
  let conf: Particle[] = [];
  let confOn = false;

  function burst(x: number, y: number) {
    if (!cv || !c2) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = window.innerWidth * dpr;
    cv.height = window.innerHeight * dpr;
    c2.setTransform(dpr, 0, 0, dpr, 0, 0);
    const shades = ['#ffffff', '#ececec', '#c9c9c4', '#9a9a95'];
    for (let i = 0; i < 85; i++) {
      conf.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 9,
        vy: -4 - Math.random() * 5,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.25,
        s: 4 + Math.random() * 4,
        type: Math.floor(Math.random() * 3),
        c: shades[Math.floor(Math.random() * shades.length)],
        life: 130 + Math.random() * 40,
      });
    }
    if (!confOn) {
      confOn = true;
      requestAnimationFrame(confLoop);
    }
  }

  function confLoop() {
    if (!c2) return;
    c2.clearRect(0, 0, window.innerWidth, window.innerHeight);
    conf = conf.filter((p) => p.life > 0 && p.y < window.innerHeight + 40);
    conf.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.16;
      p.vx *= 0.985;
      p.rot += p.vr;
      p.life--;
      c2.save();
      c2.translate(p.x, p.y);
      c2.rotate(p.rot);
      c2.globalAlpha = Math.min(1, p.life / 50);
      c2.fillStyle = p.c;
      c2.strokeStyle = p.c;
      c2.lineCap = 'round';
      const s = p.s;
      if (p.type === 0) {
        c2.fillRect(-s / 2, -s / 4, s, s / 2);
      } else if (p.type === 1) {
        c2.beginPath();
        c2.arc(0, 0, s * 0.38, 0, Math.PI * 2);
        c2.fill();
      } else {
        c2.lineWidth = Math.max(1.4, s * 0.22);
        c2.beginPath();
        c2.ellipse(0, 0, s * 0.55, s * 0.4, -0.35, 0, Math.PI * 2);
        c2.fill();
        c2.beginPath();
        c2.moveTo(s * 0.48, -s * 0.15);
        c2.lineTo(s * 0.48, -s * 2.1);
        c2.stroke();
      }
      c2.restore();
    });

    if (conf.length) {
      requestAnimationFrame(confLoop);
    } else {
      confOn = false;
      c2.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  /* ================= JOIN FORM ================= */
  const joinForm = $('#joinForm') as HTMLFormElement | null;
  const submitBtn = $('#submitBtn');

  if (joinForm && submitBtn) {
    $$('#joinForm input, #joinForm textarea').forEach((f) =>
      f.addEventListener('input', () => f.classList.remove('invalid'))
    );

    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nama = $('#f-nama') as HTMLInputElement | null;
      const kelas = $('#f-kelas') as HTMLInputElement | null;
      let bad = false;

      [nama, kelas].forEach((f) => {
        if (!f) return;
        const empty = !f.value.trim();
        f.classList.toggle('invalid', empty);
        if (empty) bad = true;
      });

      if (bad) {
        toast(t('join.err_empty'), 'x');
        return;
      }

      const first = (nama?.value || '').trim().split(' ')[0];
      toast(t('join.success_toast', { name: first }), 'party-popper');
      const r = submitBtn.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top);
      joinForm.reset();
    });
  }

  /* ================= MOBILE MENU & UTILS ================= */
  const burger = $('#burger');
  if (burger) {
    burger.addEventListener('click', () => {
      const open = document.body.classList.toggle('menu-open');
      document.documentElement.classList.toggle('locked', open);
    });
  }

  $$('#mobileMenu a').forEach((a) =>
    a.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('locked');
    })
  );

  $('#toTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* Hero fallback image */
  const heroImg = $('#heroImg') as HTMLImageElement | null;
  if (heroImg) {
    heroImg.addEventListener('error', () => {
      if (!heroImg.dataset.retry) {
        heroImg.dataset.retry = '1';
        heroImg.src = 'https://picsum.photos/seed/tradevis-stage/1600/1000.jpg';
      } else {
        heroImg.remove();
      }
    });
  }
}
