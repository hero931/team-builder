<template>    
        <div class="mainForm">                        
            <div class="form">
                <h3 class="title">Register as a Professional!</h3>
                <prof-form></prof-form>
            </div>
        </div>    
</template>

<script>
import ProfForm from '../../components/profs/ProfForm.vue'
export default {
    components: { ProfForm }
}
</script>

<style scoped>
    .mainForm {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: "alef bet gimel";
    }
    .form {        
        grid-area: bet;
        display: flex;
        flex-direction: column;
        margin: 0.7rem;
        padding: 0.6rem;
        border: 1px solid lightgrey;
        border-radius: 6px;
        box-shadow: 1px 3px lightgray;
    }
    .title {        
        text-align: center;
    }
</style>

