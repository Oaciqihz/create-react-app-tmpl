import i18n from 'i18next';

export function toggleLang(params) {
    let lang = i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN';
    i18n.changeLanguage(lang);
    localStorage.setItem(process.env.APP_LANG, lang)  
}