<template>
    <div id="main">
        <div class="wrapper">
            <v-header active="none" v-bind:style="{ display: this.dsp }"></v-header>
            <div class="logo-block white">
                <div class="title"><span>"Guli-Guli" ©Golub</span></div>
                <img src="../static/img/logo.png" class="img-block"/>
            </div>

            <sep-block color="white"
                       view="text-right"
                       title="Guli-Guli"
                       text="Not another casual messenger, but real application for life. It is necessary as your Iphone X or Tesla. Beautiful life, for beautiful people, with beautiful messenger. Feel free to text whatever you want, no one will ever see it, only you and your interlocutor. It's absolutely safe and anonymously"
                       image="/src/static/img/businessman.jpg"
                       id="second">
            </sep-block>

            <sep-block color="white"
                       view="text-left"
                       title="Why it is so safe?"
                       text="Guli-Guli uses partly decentralized network. All information will be passed through our server encoded. It will be encrypted so hard, that neither of KGB, Kommunists or Zloy Russkiy Nikolay could make a sense."
                       image="/src/static/img/hustler.jpg"
                       id="third">
            </sep-block>

            <sep-block color="white"
                       view="text-right"
                       title="What can i do with your stuff?"
                       text="You will be able to text, make audio and video calls, send media files and flex however you want. With our messenger you will start new era of communication. Place your bet on us!"
                       image="/src/static/img/man.jpg"
                       id="fourth">
            </sep-block>

            <div class="logo-block black" id="fifth">
                <div class="container">
                    <router-link to="alpha" class="btn-register btn-center">Register now</router-link>
                </div>
            </div>
            <a class="btn-scroll fontawesome-caret-down" href="#" v-on:click="changeBtn"
               v-bind:class="{ 'fontawesome-angle-down': this.isDown, 'fontawesome-angle-up': !this.isDown }"
               v-bind:style="{ color: this.btnColor }"
               v-scroll-to="this.ref"></a>
        </div>
    </div>
</template>

<script>
    import header from '../components/header.vue'
    import sepBlock from '../components/sep-block.vue'

    export default {
        components: {
            'v-header': header,
            'sep-block': sepBlock,
        },
        data() {
            return {
                dsp: "none",
                ref: "#second",
                isDown: true,
                btnColor: "black",
            }
        },
        methods: {
            changeBtn() {
                console.log(process.env.NODE_ENV);
                switch (this.ref) {
                    case "#second":
                        this.ref = "#third";
                        break;
                    case "#third":
                        this.ref = "#fourth";
                        this.btnColor = "white";
                        break;
                    case "#fourth":
                        this.ref = "#fifth";
                        this.btnColor = "black";
                        break;
                    case "#fifth":
                        this.isDown = false;
                        this.btnColor = "white";
                        this.ref = "#main";
                        break;
                    case "#main":
                        this.isDown = true;
                        this.btnColor = "black";
                        this.ref = "#second";
                        break;
                }
            },
            headerDisplay() {
                if (window.pageYOffset) {
                    this.dsp = "block";
                } else {
                    this.dsp = "none";
                }
            }
        },
        mounted () {
            window.addEventListener('scroll', this.headerDisplay)
        },
    }
</script>