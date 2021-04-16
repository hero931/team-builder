<template>
    <div>
        <section>Filter</section>
        <section>
            <div class="controls">
                <button>Refresh</button>
                <router-link to="/register">Register a Pro</router-link>
            </div>
            <ul v-if="hasProfs">
                <prof-list-item
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
        </section>
    </div>
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
    }
</style>