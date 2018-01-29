<template>
    <header>
        <div class="logo">
            <router-link to="/">
                <img src="../static/img/logo.png"/>
            </router-link>
        </div>
        <div class="nav">
            <router-link to="alpha" class="header-link" v-bind:class="{'link-active': this.active == 'alpha'}">Alpha</router-link>
            <router-link to="progress" class="header-link" v-bind:class="{'link-active': this.active == 'progress'}">Progress</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        props: {
            active: String,
        }
    }
</script>