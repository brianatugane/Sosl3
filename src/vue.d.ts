import { ComponentCustomProperties } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $i18n: {
      locale: string
      t(key: string): string
      setLocale(locale: string): void
    }
  }
}
