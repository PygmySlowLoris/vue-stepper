<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Username</label>
            <div class="control">
                <input :class="['input', ($v.username.$error) ? 'is-danger' : '']" type="text" placeholder="Text input"
                       v-model="username">
            </div>
            <p class="help is-success">This username is available</p>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="text" placeholder="Email input" v-model="demoEmail">
            </div>
            <p class="help is-danger">This email is invalid</p>
        </div>
        <div class="field">
            <label class="label">Message</label>
            <div class="control">
                <textarea class="textarea" placeholder="Textarea" v-model="message"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        data() {
            return {
                username: '',
                demoEmail: '',
                message: ''
            }
        },
        validations: {
            username: {
                required
            },
            demoEmail: {
                required,
                email
            },
            message: {
                required
            }
        },
        watch: {
            $v: {
                handler: function (val) {
                    if(!val.$invalid) {
                        this.$emit('can-continue', {value: true});
                    } else {
                        this.$emit('can-continue', {value: false});
                    }
                },
                deep: true
            }
        },
        mounted() {
            if(!this.$v.$invalid) {
                this.$emit('can-continue', {value: true});
            } else {
                this.$emit('can-continue', {value: false});
            }
        }
    }
</script>