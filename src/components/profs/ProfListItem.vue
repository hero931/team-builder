<template>
    <li>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">{{ fullName }}</h3>
                <h5 class="card-subtitle mb-2 text-muted">${{ rate }}</h5>
                <p class="card-text"><span v-for="area in areas" :key="area">{{ area }}</span></p>
                <ul class="list-group list-group-flush" v-for="area in areas" :key="area">
                    <li class="list-group-item">{{ area }}</li>                    
                </ul>
                <a href="#" class="card-link"><router-link :to="contactLink">Contact</router-link></a>
                <a href="#" class="card-link"><router-link :to="detailsLink">View Details</router-link></a>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        contactLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        detailsLink() {
            return this.$route.path + '/' + this.id;
        }
    },
}
</script>

<style scoped>
    .card {
        width: 20rem;
        margin: 2rem;
    }
</style>