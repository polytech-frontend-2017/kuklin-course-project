<template>
    <div class="logo-block" v-bind:class="{white: this.color == 'white', black: this.color == 'black'}">
        <div class="container">
            <div v-bind:class="{'side-text-left': this.view == 'text-left', 'side-img-left': this.view == 'text-right'}">
                <h1 v-if="this.view == 'text-left'" class="text-title">{{ this.title }}</h1>
                <p  v-if="this.view == 'text-left'" class="description">{{ this.text }}</p>
                <img v-if="this.view == 'text-right'" v-bind:src="this.image"/>
            </div>
            <div v-bind:class="{'side-img-right': this.view == 'text-left', 'side-text-right': this.view == 'text-right'}">
                <h1 v-if="this.view == 'text-right'" class="text-title">{{ this.title }}</h1>
                <p  v-if="this.view == 'text-right'" class="description">{{ this.text }}</p>
                <img v-if="this.view == 'text-left'" v-bind:src="this.image"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            color: String,
            view: String,
            title: String,
            text: String,
            image: String,
        },
    }
</script>