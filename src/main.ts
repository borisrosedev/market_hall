import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";
import {
    createVuePlugin
} from 'harlem';

import './style.css';
import App from './App.vue';
import LoginPage from './pages/LoginPage.vue';
import LandingPage from './pages/LandingPage.vue';
import SignupPage from './pages/SignupPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: LandingPage,
            alias: '/landing'
        },
        { 
            path: '/login', 
            component: LoginPage, 
            alias: '/signin' 
        },
        {
            path: '/signup',
            component: SignupPage,
            alias: '/register'
        }
    ]
})


createApp(App).use(createVuePlugin()).use(router).mount('#app')

