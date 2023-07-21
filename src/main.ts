import '@/assets/scss/main.scss'

import { createApp } from 'vue'
import { applyPlugins } from './plugins'

import App from './App.vue'

const app = createApp(App)
applyPlugins(app)
app.mount('#app')
