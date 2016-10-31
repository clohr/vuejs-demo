<template>
    <div>
        <Navigation></Navigation>
        <div class="view">
            <Intro></Intro>
            <Question></Question>
        </div>
    </div>
</template>

<script>
    import Navigation  from './components/navigation/Navigation.vue'
    import Intro from './components/intro/Intro.vue'
    import Question  from './components/question/Question.vue'
    // load components into new Vue
    export default {
        components: {
            Navigation,
            Intro,
            Question
        }
    }
</script>

<style>
    .view {
        padding: 1em 2em;
    }
</style>