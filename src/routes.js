import Home from './components/Home'
import SignUp from './components/SignUp'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'SignUp',
        path: '/signup',
        component: SignUp,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router