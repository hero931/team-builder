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

        const response = await fetch(`https://professionals-builder-default-rtdb.firebaseio.com/profs/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(profData)
        });

        //const responseData = await response.json();

        if(!response.ok) {
            //error...
        }

        context.commit('registerProf', {
            ...profData,
            id: userId
        });
    }
};