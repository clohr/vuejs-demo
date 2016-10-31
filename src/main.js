import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Intro from './components/intro/Intro.vue'
import Question from './components/question/Question.vue'
import NotFound from './components/notfound/NotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        components: {
            nav: App,
            content: Intro
        }
    },
    {
        path: '/question',
        components: {
            nav: App,
            content: Question
        }
    },
    {
        path: '*', 
        components: {
            nav: App,
            content: NotFound
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({router}).$mount('#app')