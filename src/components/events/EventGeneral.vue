<template>
    <div class="card" style="width: 18rem;">
            <img :src="image" class="card-img-top" alt="meetup">
            <div class="card-body">
                <h5 class="card-title">Events</h5>
                <p class="card-text">Would you like to know more about our events? Check the link below</p>
                <a href="#" class="link-info">Details</a>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: 'http://peri.org/wp-content/uploads/2012/07/small-group-meeting-1.jpg'
        }
    }
}
</script>

<style scoped>    
    .card {
        display: flex;
        align-items: flex-start;
        margin: 2rem 1rem;
        max-width: 22rem;
        box-shadow: 1px 3px lightgray;
    }

    .card-body {
        display: flex;
        flex-direction: column;        
    }    

    .btn {
        margin-top: 1rem;
        max-width: 5rem;
    }       
</style>