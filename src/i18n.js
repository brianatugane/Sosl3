import { reactive } from 'vue'
import { en } from './locales/en'
import { rw } from './locales/rw'
import { fr } from './locales/fr'
import { sw } from './locales/sw'

const messages = {
  en,
  rw,
  fr,
  sw
}

export const i18n = reactive({
  locale: localStorage.getItem('locale') || 'en',
  messages
})

export const useI18n = () => {
  const setLocale = (locale) => {
    i18n.locale = locale
    localStorage.setItem('locale', locale)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = i18n.messages[i18n.locale]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }
    
    return value || key
  }

  return {
    get locale() {
      return i18n.locale
    },
    setLocale,
    t
  }
}

export const i18nPlugin = {
  install(app) {
    app.config.globalProperties.$i18n = useI18n()
  }
}
