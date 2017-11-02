<template>
    <div id="header">
        <div class="logo">
            <p>CAROnLINE</p>
            <img src="../assets/logo.png" alt="caronline">
        </div>
        <div class="history">
            <img src="../assets/history.png" alt="history">
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

    .logo img {
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

    .history img {
        display: inline-block;
        vertical-align: middle;
        width: 65px;
        float: right;
    }
    
</style>