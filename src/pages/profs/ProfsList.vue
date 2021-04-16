<template>
        <div class="card">
        <div class="card-body">
            <button type="button" class="btn btn-outline-primary">Filter</button>
            <button type="button" class="btn btn-outline-primary">Refresh</button>           
        </div>        
        </div>            
            <!-- <div><a href="#" class="card-link"><router-link to="/register">Register</router-link></a></div>          -->
            <ul v-if="hasProfs" class="list-group">
                <prof-list-item class="list-group-item"
                        v-for="prof in filteredProfs"
                        :key="prof.id"
                        :id="prof.id"
                        :firstName="prof.firstName"
                        :lastName="prof.lastName"
                        :areas="prof.areas"
                        :rate="prof.hourlyRate"
                ></prof-list-item>
            </ul>
            <h4 v-else>No Professionals Found!</h4>    
</template>

<script>
import ProfListItem from '../../components/profs/ProfListItem.vue'
export default {
    components: { ProfListItem },
    computed: {
        filteredProfs() {
            return this.$store.getters['profs/profs'];
        },
        hasProfs() {
            return this.$store.getters['profs/hasProfs']
        }
    },
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 2rem auto;        
    }
    .card {
        margin: 2rem;        
    }
    .card-body {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .btn {
        margin: 0.3rem;
    }    
</style>