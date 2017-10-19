<template>
    <div id="header">
        <div class="logo">
            <p>CAROnLINE</p>
            <img src="../assets/logo.png">
        </div>

        <div class="button">
            Кнопка
        </div>

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
        background-color: #540c06;
        position: relative;
        text-align: left;
        padding: 20px;
    }

    .logo {
        float: left;
    }

    .logo:hover {
        opacity: .8;
    }

    img {
        display: inline-block;
        vertical-align: middle;
        width: 80px;
    }

    p {
        display: inline-block;
        vertical-align: middle;
        color: #e6e6e6;
        font-size: x-large;
        font-family: 'Kaushan Script', cursive;
    }

    .button {
        height: 50px;
        line-height: 50px;
        width: auto;
        padding: 0 25px;
        background: #fff;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        float: right;
        margin-top: 15px;
    }

    .button:hover {
        cursor: pointer;
        opacity: .8;
    }
</style>