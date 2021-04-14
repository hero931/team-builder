<template>
    <div>
        <section>Filter</section>
        <section>
            <div class="controls">
                <button>Refresh</button>
                <router-link to="/register">Register a Pro</router-link>
            </div>
            <ul><li v-for="prof in filteredProfs" :key="prof.id">
                {{prof.firstName}}
            </li></ul>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        filteredProfs() {
            return this.$store.getters['profs/profs'];
        }
    },
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>