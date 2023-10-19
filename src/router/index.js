import {
    createRouter,
    createWebHistory,
} from 'vue-router'

import Welcome from "../views/welcome.vue";
import Login from "../views/login.vue";
import Home from "../views/home.vue";
import Register from "../views/register.vue";
import Partition from "../views/partition.vue";
import Chat from "../views/chat.vue";
import Mine from "../views/mine.vue";
import Show from "../views/show.vue";
import MineMessage from "../views/mineMessage.vue";
import Post from "../views/post.vue";
import Test from "../views/test.vue";
import ChatShow from "../views/chatShow.vue";
import PartitionContent from "../views/partitionContent/partitionContent.vue";

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
        path: '/partitioncontent/:message?',
        component: PartitionContent,
        name: PartitionContent
    },
    {
        path: '/chatShow',
        component: ChatShow
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/minemessage',
        component: MineMessage
    },
    {
        path: '/post',
        component: Post
    },
    {
        path: '/test',
        component: Test
    },
    {
        path: '/show',
        //当进入到show页面时，自动更新到home路由上
        redirect:"/home",
        component: Show,
        children:[
            {
                path: '/home',
                component: Home
            },
            {
                path: '/partition',
                component: Partition
            },
            {
                path: '/chat',
                component: Chat
            },
            {
                path: '/mine',
                component: Mine
            },
        ]
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router