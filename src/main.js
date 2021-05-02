import { createApp } from 'vue'

import router from './router.js'
import store from './store/index.js'
import App from './App.vue'
import MySpinner from './components/ui/MySpinner.vue'



const app = createApp(App)

app.use(router)
app.use(store)
app.component(MySpinner, 'my-spinner')



app.mount('#app')

