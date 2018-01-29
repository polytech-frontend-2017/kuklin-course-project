<template>
    <div class="message">
        <span>{{ message }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            status: Boolean,
            successMessage: String,
            failMessage: String
        },
        data() {
            return {
                message: this.status ? this.successMessage : this.failMessage,
            }
        }
    }
</script>