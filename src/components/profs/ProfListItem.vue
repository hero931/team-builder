<template>
    <li>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">{{ fullName }}</h3>
                <h5 class="card-subtitle mb-2 text-muted">${{ rate }}</h5>                
                <ul class="list-group list-group-flush" v-for="area in areas" :key="area">
                    <li class="list-group-item"><span class="badge rounded-pill bg-warning text-dark">{{ area }}</span></li>                    
                </ul>
                <div class="links">
                    <router-link :to="contactLink"><a href="#" class="link-info">Contact</a></router-link>
                    <router-link :to="detailsLink"><a href="#" class="link-info">View Details</a></router-link>
                </div>                
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
        box-shadow: 2px 3px rgb(240, 190, 99);
    }

    .links a {
        margin-right: 1rem;
    }
</style>

