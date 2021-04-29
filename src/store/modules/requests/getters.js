export default {
    requests(state, getters, rootState, rootGetters) {
        const profId = rootGetters.userId;
        return state.requests.filter(req => req.profId === profId);
    },
    hasRequests(state, getters) {
        return getters.requests && getters.requests.length > 0;
    }
};