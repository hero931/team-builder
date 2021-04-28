export default {
    contactProf(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            profId: payload.profId,
            userEmail: payload.email,
            message: payload.message
        };
        context.commit('addRequest', newRequest);
    }
};