<template>
    <section>
        <div class="intro">
            <h1>{{ title }}</h1>
            <p v-html="msg"></p>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Welcome to the VueJS Demo',
                msg: 'This application is designed to showcase some of the finer features of <a href="https://vuejs.org/" target="_blank">VueJS</a>.'
            }
        }
    }
</script>

<style>
    .intro a {
        color: #32cd32;
        border-bottom: solid 1px transparent;
        text-decoration: none;
    }
    .intro a:hover {
        border-bottom: solid 1px #32cd32;
    }
</style>