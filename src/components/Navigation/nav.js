// export options for new Vue
export default {
    data() {
        return {
            navigation: [
                {
                    text: 'Intro',
                    url: '/',
                    selected: true
                },
                {
                    text: 'Ask a Question',
                    url: '/question',
                    selected: false
                }
            ]
        }
    }
}