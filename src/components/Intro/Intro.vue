<template>
    <intro-view :salutation="title" :message="msg"></intro-view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Welcome to the VueJS Demo',
                msg: 'This application is designed to showcase some of the finer features of VueJS + Web Components.'
            }
        }
    }
</script>