<template>
    <ul>
        <li v-for="navItem in navigation">
            <router-link class="navItem" v-bind:to="navItem.url" v-bind:class="{ active: $route.path === navItem.url }">
                {{ navItem.text }}
            </router-link> 
        </li>
    </ul>
</template>

<script src="./nav.js"></script>

<style>
    nav {
        background: #00008B;
        padding: .25em 0;
    }
    nav li {
        display: inline-block;
        margin: 0 3em 0 0;
        padding: 0;
        list-style: none;
    }
    .navItem {
        color: #ddd;
        text-decoration: none;
        padding-bottom: 2px;
        transition: color .25s ease;
    }
    .navItem:hover {
        color: #32cd32;
    }
    .navItem.active {
        color: #32cd32;
        border-bottom: dotted 1px #fff;
        cursor: default;
    }
</style>
