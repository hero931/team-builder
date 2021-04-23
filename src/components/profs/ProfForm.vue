<template>          
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstname" v-model.trim="firstName.val" @blur="removeVal('firstName')" />
                <div v-if="!firstName.isValid" class="form-text">Field can not be empty.</div>                
            </div>
            <div class="mb-3">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastname" v-model.trim="lastName.val" @blur="removeVal('lastName')" />
                <div v-if="!lastName.isValid" class="form-text">Field can not be empty.</div>
            </div>  
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="description" rows="3" v-model.trim="description.val" @blur="removeVal('description')"></textarea>
                <div v-if="!description.isValid" class="form-text">Field can not be empty.</div>
            </div>
            <div class="mb-3">
                <label for="rate" class="form-label">Hourly Rate</label>
                <input type="number" class="form-control" id="rate" v-model.number="rate.val" @blur="removeVal('rate')" />
                <div v-if="!rate.isValid" class="form-text">Field must be greater than 0.</div>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="frontend" id="frontend" v-model="areas.val" @blur="removeVal('areas')" />                
                <label class="form-check-label" for="frontend">
                    Frontend Development
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="backend" id="backend" v-model="areas.val" @blur="removeVal('areas')" />                
                <label class="form-check-label" for="backend">
                    Backend Development
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="career" id="career" v-model="areas.val" @blur="removeVal('areas')" />                
                <label class="form-check-label" for="career">
                    Career
                </label>
            </div>
            <div v-if="!areas.isValid" class="form-text">At least 1 expertise must be selected.</div>
            <div v-if="!formIsValid" class="form-text">Please try to fix errors and submit again!</div>
            <div class="d-grid gap-2 col-2 mx-auto mt-2">                  
            <button type="submit" class="btn btn-outline-primary">Register</button>
            </div>
        </form>     
</template>

<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            areas: {
                val: [],
                isValid: true
            },
            rate: {
                val: null,
                isValid: true
            },
            firstName: {
                val: '',
                isValid: true
            },
            lastName: {
                val: '',
                isValid: true
            },
            description: {
                val: '',
                isValid: true
            },
            formIsValid: true
        }
    },
    methods: {
        removeVal(input) {
            this[input].isValid = true;
        },
        validateForm() {
            this.formIsValid = true;
            if(this.firstName.val === '') {
                this.firstName.isValid = false;
                this.formIsValid = false;
            }
            if(this.lastName.val === '') {
                this.lastName.isValid = false;
                this.formIsValid = false;
            }
            if(this.description.val === '') {
                this.description.isValid = false;
                this.formIsValid = false;
            }
            if(!this.rate.val || this.rate.val < 0) {
                this.rate.isValid = false;
                this.formIsValid = false;
            }
            if(this.areas.val.length === 0) {
                this.areas.isValid = false;
                this.formIsValid = false;
            }
        },
        submitForm() {
            this.validateForm();
            if(!this.formIsValid) {
                return;
            }

            const formData = {
                first: this.firstName.val,
                last: this.lastName.val,
                desc: this.description.val,
                rate: this.rate.val,
                areas: this.areas.val
            };            
            this.$emit('save-data', formData);            
        }
    },
}
</script>

<style scoped>
    .form-text {
        color: red;        
    }
</style>





