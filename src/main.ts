import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from "vue-router"
import './style.css'
import App from './App.vue'
import LoginPage from './pages/LoginPage.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/login', 
            component: LoginPage, 
            alias: '/signin' 
        }
    ]
})
createApp(App).use(router).mount('#app')

