<template>
    <div class="main">
        <ul class="mainList">
            <event-detail
                    class="listItem"
                    v-for="event in eventsList"
                    :key="event.id"
                    :id="event.id"
                    :location="event.location"
                    :startTime="event.startTime"
                    :endTime="event.endTime"
                    :description="event.description"
            ></event-detail>
        </ul>
    </div>
</template>

<script>
import EventDetail from '../../components/events/EventDetail.vue'
export default {
    components: { EventDetail },    
    data() {
        return {

        }
    },
    computed: {
        eventsList() {
            return this.$store.getters['events/events'];                       
        }
    }
}
</script>

<style scoped>   

    .mainList {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "alef bet gim";
    }

    .listItem {
        display: flex;
        grid-area: alef bet;
        margin: 1rem;
    }
    
</style>