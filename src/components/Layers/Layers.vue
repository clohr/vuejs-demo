<template>
    <section>
        <ul class="layers-list">
            <li v-for="layer in json.layers">
                {{layer.title}}
                <ul class="annotations-list">
                    <li v-for="annotation in layer.annotations">
                        {{annotation.label}}
                    </li>
                </ul>
            </li>
        </ul>

        <button @click="addLayer">Add A New Layer</button>
        <button @click="addAnnotation">Add Annotation to Layer #3</button>
        <button @click="deleteAnnotation">Delete Annotation from Layer #2</button>
        <button @click="updateAnnotation">Update Annotation from Layer #1</button>
    </section>
</template>

<script src="./layers.js"></script>

<style>
    button {
        cursor: pointer;
        display: block;
        padding: 10px 24px;
        margin: 10px 0;
    }
</style>