<template>
    <section>
        <h1>Ask a yes/no question</h1>
        <p><input type="text" class="question-input" v-model="question" /></p>
        <p>{{answer}}</p>
    </section>
</template>

<script src="./que.js"></script>

<style>
    #app {
        margin: 5em;
    }
    .question-input {
        padding: .3em;
        width: 400px;
        font-size: 1rem;
    }
</style>
