<template>
    <div id="header">
        <p>CAROnLINE</p>
        <img src="../assets/logo.png">
    </div>
</template>

<script>
    export default {
        name: 'header'
    }
</script>

<style>
    #header {
        width: 100%;
        height: 15%;
        background-color: #540c06;
        position: relative;
    }

    img {
        display: block;
        margin-right: auto;
        width: 80px;
    }

    p {
        position: relative;
        color: #e6e6e6;
        font-size: x-large;
        float: left;
        font-family: 'Kaushan Script', cursive;
    }

</style>