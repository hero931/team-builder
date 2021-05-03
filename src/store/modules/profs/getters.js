export default {
    profs(state) {
        return state.profs;
    },
    hasProfs(state) {
        return state.profs && state.profs.length > 0;
    },
    isProf(state, getters, rootState, rootGetters) {
        const profs = getters.profs;
        const userId = rootGetters.userId;
        return profs.some(prof => prof.id === userId);
    },
    needUpdate(state) {
        const lastFetch = state.lastFetch;
        if(!lastFetch) {
            return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
    }
};