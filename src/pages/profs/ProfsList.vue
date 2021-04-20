<template>
        <div class="card">
            <div class="card-body">
                <prof-filter @change-filter="chFilter"><button type="button" class="btn btn-outline-primary">Filter</button></prof-filter>
                <button type="button" class="btn btn-outline-primary btn-sm">Refresh</button>           
            </div>        
        </div>                      
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
    .list-group {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;                                
    }
    .list-group-item {
        border: none;        
    }
    .card {
        display: flex;
        align-items: flex-start;
        margin: 2rem 1rem;
        max-width: 22rem;
        box-shadow: 1px 3px lightgray;
    }

    .card-body {
        display: flex;
        flex-direction: column;        
    }

    .btn {
        margin-top: 1rem;
        max-width: 5rem;
    }
       
</style>