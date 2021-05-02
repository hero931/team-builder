export default {
    registerProf(state, payload) {
        state.profs.push(payload);
    },
    setProfs(state, payload) {
        state.profs = payload;
    }
};