<template>
    <div class="main">        
        <div class="card">
            <div class="card-header">
                <h4>Requests received</h4>
                </div>        
                    <div class="card-body">
                        <div v-show="!!error" class="m-4">
                            <h5>{{error}}</h5>
                        </div>
                        <div class="spinner-border m-5" role="status" v-if="isLoading">
                            <span class="visually-hidden">Loading...</span>
                        </div>                                                 
                        <ul v-else-if="hasRequests && !isLoading">
                            <request-item v-for="req in myRequests"
                                :key="req.id"
                                :email="req.userEmail"
                                :message="req.message">
                            </request-item>
                        </ul>
                        <h3 v-else>No requests just yet!</h3>                                                           
                    </div>
                </div>
            <div>        
        </div>                       
    </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue'
export default {
    components: {
        RequestItem
    },
    data() {
        return {
            isLoading: false,
            error: null
        }
    },
    computed: {
        myRequests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        }
    },
    created() {
        this.loadRequests();
    },
    methods: {
        async loadRequests() {
            this.isLoading = true;
            try {
                await this.$store.dispatch('requests/fetchRequests');
            } catch(error) {
                this.error = error.message || 'Something went wrong!';
            }            
            this.isLoading = false;
        }
    },
}
</script>

<style scoped>
    .main {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: "alef bet gimel";
        margin: 2rem;
    }

    .card {
        display: flex;
        text-align: center;
        grid-area: bet;
        box-shadow: 3px 5px lightgray;
    }
    
    .card-header {
        background: rgb(223, 235, 240);
    }

    ul {
        list-style: none;
        padding: 1rem;        
    }
</style>