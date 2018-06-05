export default {
    //the first arg is the instance of Vuex.Store , another is custom

    searchUser: ({ commit }, filterUser) => {
        commit('FILTER_USER', filterUser);
    },

    selectSession : ({ commit }, userId) => {
        commit('CHANGE_SESSION', userId);
    },

    setUser : ({ commit }, user) => {
        if (user.id && user.avatar && user.nickname) {
            commit('SET_USER', user);
        }
    },

    addUser : ({ commit }, user) => {
        if (user instanceof Array || user.id && user.avatar && user.nickname) {
            commit('ADD_USER', user);
        }
    },

    removeUser : ({ commit }, userId) => {
        commit('REMOVE_USER', userId);
    },

    setConn : ({ commit }, conn) => {
        commit('SET_CONN', conn);
    },

    changeStatus : ({ commit }, status) => {
        commit('CHANGE_STATUS', status);
    },

    addMessage : ({ commit }, message) => {
        if (message.is_self != 1) {
            let userId = message.to == 0 ? 0 : message.from;
        
            commit('SET_HAS_MESSAGE',userId,true);
        }
        
        
        commit('ADD_MESSAGE',message);
    },

    setHasMessageStatus : ({ commit }, userId, status) => {
        commit('SET_HAS_MESSAGE', userId, status);
    },

    setCount : ({ commit }, count) => {
        commit('SET_COUNT', count);
    },

    showNotice : ({ commit }, msg, type) => {
        console.log(msg);
         console.log(type);
        commit('SHOW_NOTICE', msg, type);
    }


};