import { mapGetters, mapActions } from 'vuex'
import store from '../../store'

export default {
    store,
    data() {
        return {
            title: 'Counter with State'
        }
    },
    computed: mapGetters([
        'evenOrOdd'
    ]),
    methods: mapActions([
        'increment',
        'decrement',
        'incrementAsync'
    ]),
    mounted: function() {
        document.addEventListener('increment-async', this.incrementAsync.bind(this))
    }   
}