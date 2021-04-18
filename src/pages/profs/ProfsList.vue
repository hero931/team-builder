<template>
        <div class="card">
        <div class="card-body">
            <prof-filter @change-filter="chFilter"><button type="button" class="btn btn-outline-primary">Filter</button></prof-filter>
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
import ProfFilter from '../../components/profs/ProfFilter.vue'
import ProfListItem from '../../components/profs/ProfListItem.vue'
export default {
    components: { ProfListItem, ProfFilter },
    data() {
        return {
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    computed: {
        filteredProfs() {
            const profs = this.$store.getters['profs/profs'];
            return profs.filter(prof => {
                if(this.activeFilters.frontend && prof.areas.includes('frontend')) {
                    return true;
                }
                if(this.activeFilters.backend && prof.areas.includes('backend')) {
                    return true;
                }
                if(this.activeFilters.career && prof.areas.includes('career')) {
                    return true;
                }
                return false;
            });
        },
        hasProfs() {
            return this.$store.getters['profs/hasProfs']
        }
    },
    methods: {
       chFilter(updatedFilters) {
           this.activeFilters = updatedFilters;
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
        display: grid;
        grid-template-rows: 2rem 10rem;
        grid-template-areas: "alef" "alef";
        border: none;        
    }
    .card-body {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        grid-area: alef;
        border: 1px solid lightgray;
        border-radius: 6px;
        box-shadow: 1px 3px lightgray;
    }
    .btn {
        margin: 0.3rem;
    }    
</style>