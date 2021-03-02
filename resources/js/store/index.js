import { createStore } from "vuex"

const store = createStore({
    state:{
        name: "Vue"
    },
    getters:{
        getName(state) {
            return state.name
        }
    },
    mutations:{
        SET_NAME(state, data){
            state.name = data
    }
},
    actions:{
        setName({commit},data){
            commit('setName', data)
        }
    }
})

export default store
