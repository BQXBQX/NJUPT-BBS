import {
    createRouter,
    createWebHistory,
} from 'vue-router'

import Welcome from "../views/welcome/welcome.vue";
import Login from "../views/login/login.vue";
import Home from "../views/home/home.vue";
import Register from "../views/register/register.vue";
import Partition from "../views/partition/partition.vue";
import Chat from "../views/chat/chat.vue";
import Mine from "../views/mine/mine.vue";
import Show from "../views/show/show.vue";
import MineMessage from "../views/mineMessage/mineMessage.vue";
import Post from "../views/post/post.vue";
import Test from "../views/test.vue";
import ChatShow from "../views/chatShow/chatShow.vue";
import PartitionContent from "../views/partitionContent/partitionContent.vue";
import UploadView from "../views/uploadView/uploadView.vue";
import UserMessage from "../views/userMessage/userMessage.vue";
import SearchView from "../views/searchView/searchView.vue";

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
        path: '/upload',
        component: UploadView,
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
        path: '/usermessage',
        component: UserMessage
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
        path: '/search',
        component: SearchView
    },
    {
        path: '/show',
        //当进入到show页面时，自动更新到home路由上
        redirect:"/home",
        component: Show,
        children:[
            {
                path: '/home',
                component: Home,
                name: 'home',
            },
            {
                path: '/partition',
                component: Partition,
                name: 'partition',
            },
            {
                path: '/chat',
                component: Chat,
                name: 'chat',
            },
            {
                path: '/mine',
                component: Mine,
                name: 'mine',
            },
        ]
    },
]

// 创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router