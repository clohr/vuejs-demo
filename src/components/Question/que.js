import axios from 'axios'
import debounce from 'lodash/debounce'
import capitalize from 'lodash/capitalize'

// export options for new Vue()
export default {
    // default state
    data() {
        return {
          question: '',
          answer: 'I cannot give you an answer until you ask a question!'
        }
    },
    watch: {
        // whenever question changes, this function will run
        question: function () {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer() // see methods below
        }
    },
    methods: {
        getAnswer: debounce(
            function () {
                // validate user input
                if (this.question.indexOf('?') === -1) {
                    return this.answer = 'Questions usually contain a question mark. ;-)'
                }
                // update answer while making XHR call
                this.answer = 'Thinking...'
                // perform API call, validate response and handle errors
                axios
                    .get('https://yesno.wtf/api')
                    .then(response => this.answer = capitalize(response.data.answer))
                    .catch(error => this.answer = `Error! Could not reach the API. ${error}`)
            },
            250 // This is the number of milliseconds we wait for the user to stop typing
        )
    }
}