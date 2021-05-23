export default {
    events(state) {
        return state.events;
    },
    hasEvents(state) {
        return state.events && state.events.length > 0;
    }    
};