<template>
    <section class="container">
        <div class="item-b">
            <div class="card">
                <div class="card-header">
                    ${{ rate }}/hour
                </div>        
                    <div class="card-body">
                        
                            <h5 class="card-title">{{ fullName }}</h5>
                            <p class="card-text">Interested? Reach out now!</p>
                            <a href="#" class="card-link card-text"><router-link :to="contactLink">Contact</router-link></a>
                            <router-view></router-view>
                    </div>
            </div>
            <div class="card">
                <div class="card-body">
                            <p class="card-text">{{ description }}</p>                    
                            <ul class="list-group list-group-flush" v-for="area in areas" :key="area">
                                <li class="list-group-item"><span class="badge bg-info text-dark">{{ area }}</span></li>                    
                            </ul>
                </div>            
            </div>            
        </div>
    </section>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedProf: null
        }
    },
    computed: {
        fullName() {
            return this.selectedProf.firstName + ' ' + this.selectedProf.lastName;
        },
        contactLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        rate() {
            return this.selectedProf.hourlyRate;
        },
        description() {
            return this.selectedProf.description;
        },
        areas() {
            return this.selectedProf.areas;
        }
    },
    created() {
        this.selectedProf = this.$store.getters['profs/profs'].find(
            (prof) => prof.id === this.id);
    }
}
</script>

<style scoped>
    .container {
        display: grid;
        
        grid-template-columns: 20rem 10rem 50px 50px;
        grid-template-rows: auto;
        grid-template-areas: 
            "header header header header"
            "main main . sidebar"
            "footer footer footer footer";
    }
    .item-b {
        grid-area: header;
        display: flex;
        flex-direction: column;
        margin: 3rem;
        box-shadow: 3px 6px lightgray;
    }   
</style>