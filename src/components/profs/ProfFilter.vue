<template>
    <div class="filters">
        <h4>Find your professional</h4>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="frontend" checked @change="setFilter">
            <label class="form-check-label" for="frontend">Frontend</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="backend" checked @change="setFilter">
            <label class="form-check-label" for="backend">Backend</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="career" checked @change="setFilter">
            <label class="form-check-label" for="career">Career</label>
        </div> 
    </div> 
</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true
            }
        };
    },
    methods: {
        setFilter(e) {
            const inputId = e.target.id;
            const isActive = e.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    },
}
</script>

<style scoped>
    .filters {
        display: flex;
        flex-direction: column;
        align-content: center;
                        
    }
</style>