import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            profs: [
                {
                  id: '1',
                  firstName: 'Mike',
                  lastName: 'Muler',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "Freelance web developer.",
                  hourlyRate: 30
                },
                {
                  id: '2',
                  firstName: 'Greg',
                  lastName: 'Jones',
                  areas: ['frontend', 'career'],
                  description:
                    'Senior developer in a big tech company.',
                  hourlyRate: 30
                }
              ]
        };
    },
    mutations,
    actions,
    getters    
};