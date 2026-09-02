import { TRANSLATIONS, type Language } from '../data/translations';

const STORAGE_KEY = 'tdv_lang';
let currentLang: Language = 'en';

export function getLang(): Language {
  return currentLang;
}

export function t(key: string, params?: Record<string, string>): string {
  const item = TRANSLATIONS[key];
  let text = item ? item[currentLang] || item['en'] : key;

  if (params) {
    Object.keys(params).forEach((p) => {
      text = text.replace(new RegExp(`\\{${p}\\}`, 'g'), params[p]);
    });
  }

  return text;
}

export function updateDOMTranslations() {
  document.documentElement.lang = currentLang;

  // 1. Text elements with data-i18n
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const translatedText = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      (el as HTMLInputElement).placeholder = translatedText;
    } else {
      el.innerHTML = translatedText;
    }
  });

  // 2. Attributes with data-i18n-attr (e.g., data-i18n-attr="placeholder:join.placeholder_nama")
  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const attrData = el.dataset.i18nAttr;
    if (!attrData) return;
    attrData.split(';').forEach((pair) => {
      const [attrName, key] = pair.split(':').map((s) => s.trim());
      if (attrName && key) {
        el.setAttribute(attrName, t(key));
      }
    });
  });

  // 3. Update Language Switcher Toggle Buttons (EN | ID)
  document.querySelectorAll<HTMLElement>('.lang-btn-text').forEach((btn) => {
    btn.textContent = currentLang === 'en' ? 'EN' : 'ID';
  });

  document.querySelectorAll<HTMLElement>('.lang-btn').forEach((btn) => {
    btn.setAttribute(
      'aria-label',
      currentLang === 'en' ? 'Switch to Indonesian' : 'Ubah ke Bahasa Inggris'
    );
  });
}

export function setLang(lang: Language) {
  currentLang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // ignore storage errors
  }
  updateDOMTranslations();

  // Dispatch custom event for components listening to language change
  window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

export function initI18n() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === 'en' || saved === 'id') {
      currentLang = saved;
    } else {
      currentLang = 'en';
    }
  } catch (e) {
    currentLang = 'en';
  }

  updateDOMTranslations();

  // Attach event listener for language toggle buttons
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    const langBtn = target?.closest('.lang-btn');
    if (langBtn) {
      const newLang: Language = currentLang === 'en' ? 'id' : 'en';
      setLang(newLang);
    }
  });
}
