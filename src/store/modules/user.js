const adminLogin = {
    username: "admin",
    password: "qwe"
}

const state = () => ({
    hasAdminRights: false
})

const getters = {
    isAdmin: (state) => {
        return state.hasAdminRights;
    }
}

const actions = {
    login({commit}, {username, password}) {
        if (adminLogin.username === username && adminLogin.password === password) {
            commit('setAdminState', {newAdminState: true});
            return true;
        }
        return false;
    },
    logout({commit}){
        commit('setAdminState', {newAdminState: false});
    }
}

const mutations = {
    setAdminState(state, {newAdminState}) {
        state.hasAdminRights = newAdminState;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
