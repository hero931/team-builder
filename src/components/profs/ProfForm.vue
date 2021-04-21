<template>          
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstname" v-model.trim="firstName" />                
            </div>
            <div class="mb-3">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastname" v-model.trim="lastName" />
            </div>  
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="description" rows="3" v-model.trim="description"></textarea>
            </div>
            <div class="mb-3">
                <label for="rate" class="form-label">Hourly Rate</label>
                <input type="number" class="form-control" id="rate" v-model.number="rate" />
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="frontend" id="frontend" v-model="areas" />
                <label class="form-check-label" for="frontend">
                    Frontend Development
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="backend" id="backend" v-model="areas" />
                <label class="form-check-label" for="backend">
                    Backend Development
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="career" id="career" v-model="areas" />
                <label class="form-check-label" for="career">
                    Career
                </label>
            </div>
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
            areas: [],
            rate: null,
            firstName: '',
            lastName: '',
            description: ''
        }
    },
    methods: {
        submitForm() {
            const formData = {
                first: this.firstName,
                last: this.lastName,
                desc: this.description,
                rate: this.rate,
                areas: this.areas
            };            
            this.$emit('save-data', formData);            
        }
    },
}
</script>





