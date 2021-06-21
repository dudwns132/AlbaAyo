import Vue from 'vue'
import Router from 'vue-router'
import MainContent from './components/MainContent.vue'
import LoginPage from './components/LoginPage.vue'
import SignUpPage from './components/SignUpPage.vue'
import GroupList from './components/GroupList.vue'
import GroupCreate from './components/GroupCreate.vue'
import Notice from './components/Notice.vue'
import NoticeCreate from './components/NoticeCreate.vue'
import NoticeDetail from './components/NoticeDetail.vue'

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
        },
        {
            path: '/GroupList',
            name: 'GroupList',
            component: GroupList
        },
        {
            path: '/GroupCreate',
            name: 'GroupCreate',
            component: GroupCreate
        },
        {
            path: '/Notice',
            name: 'Notice',
            component: Notice
        },
        {
            path: '/NoticeCreate/:contentId?',
            name: 'NoticeCreate',
            component: NoticeCreate
        },
        {
            path: '/NoticeDetail/:contentId',
            name: 'NoticeDetail',
            component: NoticeDetail
        }
    ]
})