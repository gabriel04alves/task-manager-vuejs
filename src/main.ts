import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './firebase/firebase'

const app = createApp(App)
AOS.init()

app.use(createPinia())
app.use(router)

app.mount('#app')
