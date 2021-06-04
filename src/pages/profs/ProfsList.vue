<template>
    <div>
        <div class="mainCard">
            <div class="card">
                <div class="card-body">
                    <prof-filter @change-filter="chFilter"><button type="button" class="btn btn-outline-primary">Filter</button></prof-filter>                
                    <router-link v-if="!isProf && !isLoading" to="/register" class="btn btn-primary">Register</router-link>
                    <button type="button" class="btn btn-outline-primary btn-sm" @click="loadProfs(true)">Refresh</button>                           
                </div>                                                                        
            </div>
            <div class="event"><event-general></event-general></div>
        </div>
        <div class="spinner-border m-5" role="status" v-if="isLoading">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-show="!!error" class="m-4">
            <h5>{{error}}</h5>
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
        <h4 v-else class="m-4">No Professionals Found!</h4>
        
    </div>                
</template>

<script>
import ProfFilter from '../../components/profs/ProfFilter.vue'
import ProfListItem from '../../components/profs/ProfListItem.vue'
import EventGeneral from '../../components/events/EventGeneral.vue'
export default {
    components: { ProfListItem, ProfFilter, EventGeneral },
    data() {
        return {
            isLoading: false,
            error: null,
            activeFilters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    computed: {
        isProf() {
            return this.$store.getters['profs/isProf'];
        },
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
            return !this.isLoading && this.$store.getters['profs/hasProfs']
        }        
    },
    created() {
        this.loadProfs();
    },
    methods: {
       chFilter(updatedFilters) {
           this.activeFilters = updatedFilters;
       },
       async loadProfs(refresh = false) {
           this.isLoading = true;
           try {
               await this.$store.dispatch('profs/loadProfs', {forceRefresh: refresh});
           } catch(error) {
               this.error = error.message || 'Something went wrong!';               
           }           
           this.isLoading = false;
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

    .mainCard {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: "alef bet gim dal";
    }

    .card {
        display: flex;
        align-items: flex-start;
        margin: 2rem 1rem;
        max-width: 22rem;
        box-shadow: 1px 3px lightgray;
        grid-area: alef;        
    }

    .event {
        display: flex;
        grid-area: bet;
    }    

    .card-body {
        display: flex;
        flex-direction: column;        
    }    

    .btn {
        margin-top: 1rem;
        max-width: 6rem;
    }         
</style>
