<template>
    <div>
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
    html {
        font-family: "Roboto", sans-serif;
    }     
    .nav {
        display: grid;        
        border: 1px solid lightgray;        
        border-radius: 8px;
        margin: 1rem;
        box-shadow: 5px 10px lightgray;
        grid-template-rows: 4rem;
    }    
</style>