import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CButton from './components/ui/c-button.vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.component('c-button', CButton)
app.use(router)

app.mount('#app')
