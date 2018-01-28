<template>
    <div class="wrapper" v-on:click="resetTooltips">
        <v-header active="alpha"></v-header>
        <div class="logo-block white" id="blue">
            <div class="container">
                <div class="side-bar">
                    <div class="progress-bar">
                        <progress-bar type="circle" ref="line" color="#000000" strokeWidth="2.0" duration="2000">
                        </progress-bar>
                        <p class="description score">{{booked}}/{{total}}</p>
                    </div>
                </div>
                <div class="side-text-bar">
                    <h1 class="text-title">Alpha test</h1>
                    <p class="description reg-description">
                        Ofc, our messenger is only for very privileged people, that's why there is only {{ total
                        }} tickets for access to alpha testing, hurry up!</p>
                    <a class="btn-register" href="#" v-scroll-to="'#register'">Go to register</a>
                </div>
            </div>
        </div>
        <div class="logo-block login black" id="register">
            <div id="login">
                <form @submit.prevent="submitForm">
                    <fieldset class="clearfix">
                        <p><span class="fontawesome-envelope register-icon"></span><input v-model="email"
                                                                                          v-validate="'required|email'"
                                                                                          type="text"
                                                                                          name="email"
                                                                                          placeholder="example@google.com"
                                                                                          v-tooltip.right="{ show: !this.isEmailValid, trigger: 'manual', content: 'Please enter a valid email' }">
                        </p>
                        <p><span class="fontawesome-user register-icon"></span><input v-model="name"
                                                                                      v-validate="'required|alpha'"
                                                                                      type="text"
                                                                                      name="name"
                                                                                      placeholder="Adriano"
                                                                                      v-tooltip.right="{ show: !this.isNameValid, trigger: 'manual', content: 'Please enter your name' }">
                        </p>
                        <p><input type="submit" value="Send request"></p>
                    </fieldset>
                </form>
            </div>
            <ring-loader size="120px" v-bind:loading=this.loading></ring-loader>
            <v-message v-if=this.triedApply v-bind:status="this.RegStatus" successMessage="You successfully applied"
                       failMessage="There were some troubles, try again"></v-message>
        </div>
    </div>
</template>
<script>
    import message from '../components/message.vue';
    import header from '../components/header.vue';
    import VueResource from 'vue-resource';
    import VeeValidate from 'vee-validate';
    import VTooltip from 'v-tooltip';
    import RingLoader from 'vue-spinner/src/RingLoader.vue'


    export default {
        name: 'alpha',
        components: {
            'v-header': header,
            'v-message': message,
            'ring-loader': RingLoader
        },
        data() {
            return {
                isEmailValid: true,
                isNameValid: true,
                booked: 0,
                total: 0,
                loading: false,
                triedApply: false,
            }
        },
        mounted() {
            this.$http.get('/alpha/booked').then(response => {
                this.booked = response.body.booked;
                this.total = response.body.total;
                this.$refs.line.animate(response.body.booked / response.body.total);
            }, response => {
            });
        },
        methods: {
            submitForm() {
                this.triedApply = false;
                this.$validator.validateAll().then(res => {
                    if (res) {
                        this.loading = true;
                        this.$http.post('/alpha/apply', {
                            'email': this.email,
                            'name': this.name,
                            timeout: 3000
                        }).then(response => {
                            this.triedApply = true;
                            this.RegStatus = true;
                        }, response => {
                            this.showApplyFail();
                        }).catch(() => {
                            this.showApplyFail();
                        });
                        this.loading = false;
                        return;
                    }
                    if (this.errors.has('email')) {
                        this.isEmailValid = false;
                    }
                    if (this.errors.has('name')) {
                        this.isNameValid = false;
                    }
                })
            },
            resetTooltips() {
                this.isEmailValid = true;
                this.isNameValid = true;
            },
            showApplyFail() {
                this.RegStatus = false;
                this.triedApply = true;
            }
        }
    }
</script>