<template>
    <div>
        <h1>Step One</h1>
        <button @click="canContinue">Can continue</button>
    </div>
</template>

<script>
    export default {
        props: ['clickedNext', 'currentStep'],
        methods: {
            canContinue() {
                this.$emit('can-continue', {value: true});
            }
        }
    }
</script>