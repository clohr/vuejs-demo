import Navigation from './components/Navigation/Navigation.vue'
import Intro from './components/Intro/Intro.vue'
import Question from './components/Question/Question.vue'
import Counter from './components/Counter/Counter.vue'
import NotFound from './components/NotFound/NotFound.vue'

const routes = [
    {
        path: '/',
        components: {
            nav: Navigation,
            content: Intro
        }
    },
    {
        path: '/question',
        components: {
            nav: Navigation,
            content: Question
        }
    },
    {
        path: '/counter',
        components: {
            nav: Navigation,
            content: Counter
        }
    },
    {
        path: '*', 
        components: {
            nav: Navigation,
            content: NotFound
        }
    }
]

export default routes