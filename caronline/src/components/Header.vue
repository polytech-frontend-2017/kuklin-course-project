<template>
    <div id="header">
        <div class="logo">
            <p>CAROnLINE</p>
            <img src="../assets/logo.png" alt="caronline">
        </div>
        <button class="history">
            <img src="../assets/history.png" alt="history" v-on:click="historyShow">
        </button>
    </div>
</template>

<script>
    export default {
        name: 'header',
        methods: {
            "historyShow": function (event) {
                console.log("pressed")
            }
        }
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

    .history {
        display: inline-block;
        vertical-align: middle;
        width: 65px;
        float: right;
        padding-top: 10px;
        background-color: transparent;
        border: none;
    }

    .history:hover {
        opacity: .8;
    }

     .history:focus {
        opacity: .8;
    }

    .history img {
        display: inline-block;
        vertical-align: middle;
        width: 65px;
        float: right;
        padding-top: 10px;
    }


</style>