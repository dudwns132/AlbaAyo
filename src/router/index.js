import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/components/LoginPage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/Hello',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/LoginPage',
            name: 'LoginPage',
            component: LoginPage
        }
    ]
})