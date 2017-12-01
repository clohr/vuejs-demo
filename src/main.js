import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

// key to making web components work within Vue
Vue.config.ignoredElements = [
    'intro-view',
    'paper-input'
]

const router = new VueRouter({
    mode: 'history',
    routes
})

const vw = new Vue({router})
vw.$mount('#app')