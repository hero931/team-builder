import { createStore } from 'vuex'

import profsModule from './modules/profs/index.js'

const store = createStore({
    modules: {
        profs: profsModule
    },
    state() {
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;