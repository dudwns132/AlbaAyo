import Vue from 'vue'
import App from './App.vue'
import { store } from "./store"
import router from './router'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vuetify from "./plugins/vuetify"
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

new Vue({
  router,
  vuetify,
  VueCarousel,
  store,
  render: h => h(App),
}).$mount('#app')
