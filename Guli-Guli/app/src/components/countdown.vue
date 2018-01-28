<template>
    <div>
        <div class="block">
            <p class="digit">{{ days }}</p>
            <p class="time-text">Days</p>
        </div>
        <div>
            <p class="digit">{{ hours }}</p>
            <p class="time-text">Hours</p>
        </div>
        <div>
            <p class="digit">{{ minutes }}</p>
            <p class="time-text">Minutes</p>
        </div>
        <div>
            <p class="digit">{{ seconds }}</p>
            <p class="time-text">Seconds</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            date: String
        },
        created: function () {
            this.finalDate = Date.parse(this.date) / 1000;
        },
        data() {
            return {
                now: Math.trunc((new Date()).getTime() / 1000)
            }
        },
        mounted: function () {
            setInterval(this.updateCurrentTime, 1000);
        },
        computed: {
            seconds() {
                return this.checkDigitNumber((this.finalDate - this.now) % 60);
            },
            minutes() {
                return this.checkDigitNumber(Math.trunc((this.finalDate - this.now) / 60) % 60);
            },
            hours() {
                return this.checkDigitNumber(Math.trunc((this.finalDate - this.now) / 60 / 60) % 24);
            },
            days() {
                return Math.trunc((this.finalDate - this.now) / 60 / 60 / 24);
            }
        },
        methods: {
            updateCurrentTime() {
                this.now += 1;
            },
            checkDigitNumber(n) {
                if (n.toString().length === 1) {
                    return "0" + n;
                }
                return n;
            }
        }
    }
</script>