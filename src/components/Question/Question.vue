<template>
    <section>
        <h1>Ask a yes/no question</h1>
        <p>
            <paper-input 
                class="question-input"
                :value="question"
                @input="question = $event.target.value"></paper-input>
        </p>
        <p>{{ answer }}</p>
    </section>
</template>

<script src="./que.js"></script>

<style>
    .question-input {
        padding: .3em;
        width: 400px;
        font-size: 1rem;
    }
</style>
