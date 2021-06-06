<template>
    <div class="main">        
        <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-body">
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" v-model.trim="email">                
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" v-model.trim="password">                
                    </div>
                    <div v-if="!formIsValid" class="form-text mb-2">Please enter a valid password (at least 6 charachters) and valid email.</div>
                    <button type="submit" class="btn btn-outline-primary">{{ submitBtnCapt }}</button>
                    <button type="button" class="btn btn-outline-success" @click="switchAuthMode">{{ switchModeBtnCapt }}</button>
                </form>            
            </div>        
        </div>        
        <div class="load" v-show="isLoading">
            <div class="card shadow p-3 mb-5 bg-body rounded">
            <div class="card-body">
                <div class="d-flex align-items-center text-warning">
                        <strong>Loading...</strong>
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            </div>
        </div>
        <div class="err" v-show="!!error">
            <div class="card shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                <div class="d-flex align-items-center text-warning">
                        <p>{{error}}</p>                    
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null
        }
    },
    computed: {
        submitBtnCapt() {
            if(this.mode === 'login') {
                return 'Login';
            } else {
                return 'Signup';
            }
        },
        switchModeBtnCapt() {
            if(this.mode === 'login') {
                return 'Signup now';
            } else {
                return 'Login now';
            }
        }
    },
    methods: {
        async submitForm() {            
            this.formIsValid = true;
            if(this.email === '' || !this.email.includes('@') || this.password < 6) {
                this.formIsValid = false;
                return;
            }

            this.isLoading = true;

            const actionPayload = {
                email: this.email,
                password: this.password
            }

            try {
                if(this.mode === 'login') {
                    await this.$store.dispatch('login', actionPayload)
                } else {
                await this.$store.dispatch('signup', actionPayload);
                }
            } catch(err) {
                this.error = err.message || 'Authentication failed';
            }

            this.isLoading = false;            
        },
        switchAuthMode() {
            if(this.mode === 'login') {
                this.mode = 'signup';
            } else {
                this.mode = 'login';
            }
        }        
    },
}
</script>

<style scoped>
    .main {
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr;
        grid-auto-rows: 1fr 1fr;
        grid-template-areas: "alef bet gim"                              
                              "zain het tet";
    }

    

    .card {
        margin: 2rem;
        display: flex;
        grid-area: bet;
    }

    .load {
        grid-area: het;
    }

    .err {
        grid-area: het;
    }

    .btn {
        margin-right: 1rem;
    }

    .form-text {
        color: lightcoral;
    }
</style>