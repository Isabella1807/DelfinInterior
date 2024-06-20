import './assets/main.scss'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router/index.ts'
import store from './store'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(store)

app.use(pinia)
app.mount('#app')
