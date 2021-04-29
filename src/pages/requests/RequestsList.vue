<template>
    <div class="main">        
        <div class="card">
            <div class="card-header">
                <h4>Requests received</h4>
                </div>        
                    <div class="card-body">                        
                        <ul v-if="hasRequests">
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
    computed: {
        myRequests() {
            return this.$store.getters['requests/requests'];
        },
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
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
    }
    
    .card-header {
        background: rgb(194, 226, 247);
    }

    ul {
        list-style: none;
        padding: 1rem;        
    }
</style>