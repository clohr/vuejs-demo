<template>
    <div>
        <Navigation></Navigation>
    </div>
</template>

<script>
    import Navigation  from './components/navigation/Navigation.vue'
    // load components into new Vue
    export default {
        components: {
            Navigation
        }
    }
</script>

<style>
    .view {
        padding: 1em 2em;
    }
</style>