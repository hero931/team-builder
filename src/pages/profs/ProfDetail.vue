<template>
    <div class="main">        
            <div class="card">
                <div class="card-header">
                    ${{ rate }}/hour
                </div>        
                    <div class="card-body">                        
                            <h5 class="card-title">{{ fullName }}</h5>
                            <p class="card-text">Interested? Reach out now!</p>
                            <a href="#" class="card-link card-text"><router-link :to="contactLink">Contact</router-link></a>
                            <router-view></router-view>
                    </div>
            </div>
            <hr>
            <div class="card">
                <div class="card-body">
                            <p class="card-text">{{ description }}</p>                    
                            <ul class="list-group list-group-flush" v-for="area in areas" :key="area">
                                <li class="list-group-item"><span class="badge bg-info text-dark">{{ area }}</span></li>                    
                            </ul>
                </div>            
            </div>     
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedProf: null
        }
    },
    computed: {
        fullName() {
            return this.selectedProf.firstName + ' ' + this.selectedProf.lastName;
        },
        contactLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        rate() {
            return this.selectedProf.hourlyRate;
        },
        description() {
            return this.selectedProf.description;
        },
        areas() {
            return this.selectedProf.areas;
        }
    },
    created() {
        this.selectedProf = this.$store.getters['profs/profs'].find(
            (prof) => prof.id === this.id);
    }
}
</script>

<style scoped>
    .main {
        display: grid;        
        max-width: 30rem;
        margin: 2rem;
        border: 1px solid lightgray;
        border-radius: 6px;
        box-shadow: 1px 3px rgb(187, 197, 204);
    }
    .card {
        border: none;
    }
     
</style>