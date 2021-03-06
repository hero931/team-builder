import { createRouter, createWebHistory } from 'vue-router';

import ProfsList from './pages/profs/ProfsList.vue';
import ProfRegister from './pages/profs/ProfRegister.vue';
import ProfDetail from './pages/profs/ProfDetail.vue';
import ContactProf from './pages/requests/ContactProf.vue';
import RequestsList from './pages/requests/RequestsList.vue';
import NotFound from './pages/NotFound.vue';
import EventsList from './pages/events/EventsList.vue';
import UserAuth from './pages/auth/UserAuth.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/profs'},
        {path: '/profs', component: ProfsList},
        {path: '/register', component: ProfRegister},
        {path: '/profs/:id',
            component: ProfDetail,
            props: true,
            children: [
                {path: 'contact', component: ContactProf}
            ]
        },
        {path: '/requests', component: RequestsList},
        {path: '/:notFound(.*)', component: NotFound},
        {path: '/auth', component: UserAuth},
        {path: '/events', component: EventsList}
    ]
});

export default router;