<template>
    <div class="box">
        <div class="nav"><the-header></the-header></div>
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
export default {
  components: { TheHeader },    
}
</script>

<style>
    * {
        box-sizing: border-box;
    }

    html {
        font-family: "Roboto", sans-serif;
    }    

    .box {
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 5rem 10rem 10rem;
        grid-template-areas: 
            "alef alef alef alef"
            "bet bet bet gimel"
            "dal dal dal dal";
    }

    .nav {        
        border: 1px solid lightgray;
        grid-area: alef;
        border-radius: 8px;
        margin: 0.3rem;
        box-shadow: 5px 10px lightgray;
    }

    
</style>