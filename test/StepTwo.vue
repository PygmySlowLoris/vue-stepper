<template>
    <div>
        <h1>Step One</h1>
        <button @click="canContinue">Finish</button>
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