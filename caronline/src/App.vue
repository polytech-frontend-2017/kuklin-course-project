<template>
    <div id="app">
        <headzone></headzone>
        <drop></drop>
    </div>
</template>

<script>
    import Drop from './components/Drop.vue'
    import Headzone from './components/Header.vue'

    export default {
        name: 'app',
        components: {
            Drop,
            Headzone
        },
        methods: {
            'showSuccess': function (file) {
                console.log('A file was successfully uploaded')
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        border:0;
        max-height: 99999999px;
        -webkit-font-smoothing: antialiased;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
    }
    #app {
        text-align: center;
        color: #2c3e50;
        height: 100vh;
        min-width:320px;
        min-height:600px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        align-content: stretch;
    }
    body {
        margin: 0%;
        font-family: sans-serif;
    }
</style>