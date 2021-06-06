export default {
    async contactProf(context, payload) {
        const newRequest = {
            //id: new Date().toISOString() - generates dummy id            
            userEmail: payload.email,
            message: payload.message
        };
        const response = await fetch(`https://pro-builder-9bc6d-default-rtdb.firebaseio.com/requests/${payload.profId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request!');
            throw error;
        }

        //name is a unique id that was generated on firebase

        newRequest.id = responseData.name;
        newRequest.profId = payload.profId;

        context.commit('addRequest', newRequest);
    },
    
    async fetchRequests(context) {
        const profId = context.rootGetters.userId;
        const token = context.rootGetters.token;
        const response = await fetch(`https://pro-builder-9bc6d-default-rtdb.firebaseio.com/requests/${profId}.json?auth=` + token); 
        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch request!');
            throw error;
        }
        const requests = []; 
        
        for(const key in responseData) {
            const request = {
                id: key,
                profId: profId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }
            requests.push(request);
        }
        context.commit('setRequests', requests);
    }    
};