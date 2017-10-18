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
    #app {
        text-align: center;
        color: #2c3e50;
        height: 100vh;
    }
    body {
        margin: 0%;
    }
</style>
