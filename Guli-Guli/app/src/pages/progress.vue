<template>
    <div class="wrapper">
        <v-header active="progress"></v-header>
        <div>
            <div class="time-parent">
                <div class="time">
                    <v-countdown date="01 Jun 2018 00:00:00 GMT"></v-countdown>
                    <div class="commits"><span>Currently it was made {{ totalCommits }} commits</span></div>
                    <ring-loader style="display: block" size="120px" v-bind:loading=this.loading></ring-loader>
                    <v-message v-if=this.failGotCommits v-bind:status="false"
                               failMessage="There were some troubles, checking commit number. Refresh the page to try again"></v-message>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import header from '../components/header.vue'
    import countdown from '../components/countdown.vue'
    import RingLoader from 'vue-spinner/src/RingLoader.vue'
    import message from '../components/message.vue'

    const url = 'https://api.github.com/repos/justplesh/Guli-Guli-land/stats/contributors';

    export default {
        name: 'progresses',
        components: {
            'v-header': header,
            'v-countdown': countdown,
            'ring-loader': RingLoader,
            'v-message': message,
        },
        data: function () {
            return {
                totalCommits: 0,
                loading: true,
                failGotCommits: false
            }
        },
        mounted: function () {
            this.$http.get(url, {timeout: 3000}).then(res => {
                this.loading = false;
                let totalCommits = 0;
                res.body.forEach(function (e) {
                    totalCommits += e.total;
                });
                this.totalCommits = totalCommits;
            }, res => {
                console.log("in res");
                this.showCommitsTrouble();
            }).catch(() => {
                console.log("in catch");
                this.showCommitsTrouble();
            })
        },
        methods: {
            showCommitsTrouble() {
                console.log("in comtroub");
                this.loading = false;
                this.failGotCommits = true;
            }
        }
    }
</script>