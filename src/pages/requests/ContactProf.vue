<template>
    <div class="form">
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="email" class="form-label">Your E-Mail</label>
                <input type="email" class="form-control" id="email" v-model.trim="email" />                                
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="3" v-model.trim="message"></textarea>                
            </div>
            <div v-if="!formIsValid" class="form-text">Please fill in email and message fields!</div>            
            <div class="d-grid gap-2 col-2 mx-auto mt-2">                  
            <button type="submit" class="btn btn-outline-primary d-grid d-sm-block">Send</button>
            </div>
        </form>
    </div>   
</template>

<script>
export default {
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true
        }
    },
    methods: {
        submitForm() {
            this.formIsValid = true;
            if(this.email === '' || !this.email.includes('@') || this.message === '') {
                this.formIsValid = false;
                return;
            }
            this.$store.dispatch('requests/contactProf', {
                email: this.email,
                message: this.message,
                profId: this.$route.params.id
            });
            this.$router.replace('/profs');
        }
    },
}
</script>

<style scoped>
    .form-text {
        color: red;        
    }

    .form {
        border: 1px solid lightgray;
        border-radius: 6px;
        box-shadow: 1px 3px rgb(187, 197, 204);
        padding: 1rem;
    }
    
</style>