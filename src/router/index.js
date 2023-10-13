import {
    createRouter,
    createWebHistory,
} from 'vue-router'

import Welcome from "../views/welcome.vue";
import Login from "../views/login.vue";
import Home from "../views/home.vue";

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
]

// 创建路由对象
const router = createRouter({
    history: createWebHistory(),		//hash路由模式
    routes
})

export default router