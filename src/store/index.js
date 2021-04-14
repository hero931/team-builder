import { createStore } from 'vuex'

import profsModule from './modules/profs/index.js'

const store = createStore({
    modules: {
        profs: profsModule
    }
});

export default store;