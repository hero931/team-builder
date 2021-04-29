<template>
    <li>
        <div class="card">
            <div class="card-body">
                <p>{{message}}</p>
                <div>
                    <a :href="emailLink" class="card-link">{{email}}</a>
                </div>                
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['email', 'message'],
    computed: {
        emailLink() {
            return 'mailto:' + this.email;
        }
    },
}
</script>

<style scoped>
    .card {
        margin: 0.5rem;
    }
</style>