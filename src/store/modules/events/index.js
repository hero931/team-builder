import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {            
            events: [
                {
                  id: '1',
                  location: 'Washington DC',
                  startTime: '6:00pm',
                  endTime: '8:00pm',
                  description:
                    'Talk to your pro in person'                  
                },
                {
                  id: '2',
                  location: 'Remote',
                  startTime: '7:00pm',
                  endTime: '10:00pm',
                  description:
                    'Have a zoom meeting with our professionals'
                }
              ]
        };
    },
    mutations,
    actions,
    getters    
};