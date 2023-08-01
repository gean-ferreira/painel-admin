import { type App } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import { Form, Field, ErrorMessage } from '@/plugins/VeeValidate'

export function applyPlugins(app: App<Element>) {
  app.use(createPinia())
  app.use(router)

  app.component('Form', Form)
  app.component('Field', Field)
  app.component('ErrorMessage', ErrorMessage)
}
