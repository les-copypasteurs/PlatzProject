import { createStore } from "vuex"
import axios from 'axios'

const store = createStore({
    state:{
        name: "Vue",
        posts: []
    },
    getters:{
        getName(state) {
            return state.name
        },
        getPosts(state){
            return state.posts
        },
        getPostById(state){       
            return function (id){
                return state.posts.find((post) => post.id == id)           
            }      
        }
    },
    mutations:{
        SET_NAME(state, data){
            state.name = data
    },
        SET_POSTS(state, data){
            state.posts = data;
        }
},
    actions:{
        setName({commit},data){
            commit('setName', data)
        },
        setPosts({commit}){
            axios.get('/api/posts')
            .then((response) => commit('SET_POSTS',response.data))
        }
    }
})

export default store
