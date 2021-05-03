import { createStore } from 'vuex'

import profsModule from './modules/profs/index.js'
import reqModule from './modules/requests/index.js'

const store = createStore({
    modules: {
        profs: profsModule,
        requests: reqModule
    },
    state() {
        return {
            userId: 'c1'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;