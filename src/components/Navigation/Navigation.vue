<template>
    <nav>
        <ul>
            <li v-for="navItem in navigation">
                <a class="navItem" :href="navItem.url" :class="{active: $route.path === navItem.url}">{{navItem.text}}</a>
            </li>
        </ul>
    </nav>
</template>

<script src="./nav.js"></script>

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
