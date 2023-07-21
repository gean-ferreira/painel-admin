import { type App } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

export function applyPlugins(app: App<Element>) {
  app.use(createPinia())
  app.use(router)
}
