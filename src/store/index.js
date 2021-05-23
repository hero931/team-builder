import { createStore } from 'vuex'

import profsModule from './modules/profs/index.js'
import reqModule from './modules/requests/index.js'
import eventModule from './modules/events/index.js'

const store = createStore({
    modules: {
        profs: profsModule,
        requests: reqModule,
        events: eventModule
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