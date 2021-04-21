export default {
    registerProf(context, data) {
        const profData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        context.commit('registerProf', profData);
    }
};