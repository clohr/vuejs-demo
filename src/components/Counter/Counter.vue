<template>
    <div>
        <h1>{{ title }}</h1>
        <div id="counter">
            Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
            <increment-button></increment-button>
        </div>
    </div>
</template>

<script src="./counter.js"></script>
