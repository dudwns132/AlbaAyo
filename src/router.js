import Vue from 'vue'
import Router from 'vue-router'
import MainContent from './components/MainContent.vue'
import LoginPage from './components/LoginPage.vue'
import SignUpPage from './components/SignUpPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'MainContent',
            component: MainContent
        },
        {
            path: '/schedule',
            name: 'schedule',
            component: () => import('./views/Schedule.vue')
        },
        {
            path:'/test',
            component: () => import('./views/test.vue')
        },
        {
            path: '/invite',
            name: 'invite',
            component: () => import('./views/invite.vue')
        },
        {
            path: '/LoginPage',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/SignUpPage',
            name: 'SignUpPage',
            component: SignUpPage
        }
    ]
})