<template>
    <dropzone id="drop" url="https://httpbin.org/post" v-on:vdropzone-success="showSuccess">
        <input type="hidden" name="token" value="xxx">
    </dropzone>
</template>

<script>
    import Dropzone from 'vue2-dropzone'

    export default {
        name: 'drop',
        components: {
            Dropzone,
        },
        methods: {
            'showSuccess': function (file) {
                console.log('A file was successfully uploaded')
            }
        }
    }

</script>

<style>
    #drop {
        position: relative;
        margin: 0;
        background-color: #e6e6e6;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
</style>