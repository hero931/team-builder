import { createStore } from 'vuex'

import profsModule from './modules/profs/index.js'
import reqModule from './modules/requests/index.js'
import eventModule from './modules/events/index.js'
import authModule from './modules/auth/index.js'

const store = createStore({
    modules: {
        profs: profsModule,
        requests: reqModule,
        events: eventModule,
        auth: authModule
    }       
});

export default store;