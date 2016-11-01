<template>
    <section>
        <nav>
            <NavItems></NavItems>
        </nav>
    </section>
</template>

<script>
    import NavItems  from './NavItems.vue'
    // load components into new Vue
    export default {
        components: {
            NavItems
        }
    }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    h1 {
        font-size: 2rem;
    }
    .view {
        padding: 1em 2em;
    }
</style>