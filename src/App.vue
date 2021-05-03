<template>
    <div>
        <div class="nav"><the-header></the-header></div>
        <router-view v-slot="slotProps">
            <transition name="route" mode="out-in">
              <component :is="slotProps.Component"></component>
            </transition>
        </router-view>
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

    .route-enter-from {
        opacity: 0;
        transform: translateY(-30px);
    }

    .route-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .route-enter-active {
        transition: all 0.3s ease-out;
    }

    .route-leave-active {
        transition: all 0.3s ease-in;
    } 

    .route-enter-to,
    .route-leave-from {
        opacity: 1;
        transform: translateY(0);
    }    
</style>