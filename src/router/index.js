import {
    createRouter,
    createWebHistory,
} from 'vue-router'

import Welcome from "../views/welcome.vue";
import Login from "../views/login.vue";
import Home from "../views/home.vue";
import Register from "../views/register.vue";

const routes = [
// 路由的默认路径
    {
        path:'/',
        redirect:"/welcome"
    },
//创建路径
    {
        path: '/welcome',
        component: Welcome
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/register',
        component: Register
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router