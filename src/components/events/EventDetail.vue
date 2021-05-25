<template>
    <li class="mainCard">
        <div class="card">
            <img :src="img1" class="card-img-top" alt="meeting">
            <div class="card-body">
            <h5 class="card-title">{{location}}</h5>
            <p class="card-text">{{description}}</p>
            <p class="card-text"><small class="text-muted">{{startTime}}</small></p>
        </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'location', 'startTime', 'endTime', 'description'],
    data() {
        return {
            img1: 'https://www.klm.com/travel/us_en/images/klmgroup_tcm518-984907.jpg'            
        }
    }
}
</script>

