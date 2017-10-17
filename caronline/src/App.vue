<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>Welcome to GoLang kingdom</h1>

        <dropzone id="myVueDropzone" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess">
            <!-- Optional parameters if any! -->
            <input type="hidden" name="token" value="xxx">
        </dropzone>

    </div>
</template>

<script>
    import Dropzone from 'vue2-dropzone'

    export default {
        name: 'app',
        components: {
            Dropzone
        },
        methods: {
            'showSuccess': function (file) {
                console.log('A file was successfully uploaded')
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
