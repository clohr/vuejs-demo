<template>
    <div>
        <h1>{{ title }}</h1>
        <div id="counter">
            Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
            <button @click="incrementAsync">Increment async</button>
        </div>
    </div>
</template>

<script src="./counter.js"></script>
