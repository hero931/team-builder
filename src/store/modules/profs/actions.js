export default {
    async registerProf(context, data) {
        const userId = context.rootGetters.userId;
        const profData = {            
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const token = context.rootGetters.token;

        const response = await fetch(`https://pro-builder-9bc6d-default-rtdb.firebaseio.com/profs/${userId}.json?auth=` + token, {
            method: 'PUT',
            body: JSON.stringify(profData)
        });        

        if(!response.ok) {
            //error...
        }

        context.commit('registerProf', {
            ...profData,
            id: userId
        });
    },
    
    async loadProfs(context, payload) {
        if(!payload.forceRefresh && !context.getters.needUpdate) {
            return;
        }

        const response = await fetch(`https://pro-builder-9bc6d-default-rtdb.firebaseio.com/profs.json`);
        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const profs = [];

        for(const key in responseData) {
            const prof = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas 
            };
            profs.push(prof);
        }
        context.commit('setProfs', profs);
        context.commit('setFetchTimestamp');
    }
};