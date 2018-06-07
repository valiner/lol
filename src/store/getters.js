// export function getMsg(state){
//     return state.msg;
// }
export default {
    filterUser : ({ filterUser }) => filterUser,

    currentUser : ({ currentUser }) => currentUser,  //current user

    users : ({ users }) => users,    //user list

    currentSession : ({ currentSession }) => currentSession,

    broadcast : ({ broadcast }) => broadcast,

    conn : ({ connection }) => {
        
        if (connection != null) {
            return connection;
        }
    },

    userpro : ({ userpro }) => userpro,

    online : ({ online }) => online,

    currentCount : ({ currentCount }) => currentCount,

    notice : ({ notice }) => notice
}