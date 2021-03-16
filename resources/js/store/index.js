
import { createStore } from "vuex"
import axios from 'axios'

const store = createStore({
    state:{
        name: "Vue",
        posts: [],
        filter:[1,2,3,4,5],
        q: ""
    },
    getters:{
        getPosts(state){
            return state.posts
        },
        getFilter(state){
            return state.filter
        },
        getSearch(state){
            return state.q
        },
        getPostById(state){       
            return function (id){
                return state.posts.find((post) => post.id == id)           
            }      
        }
    },
    mutations:{
        SET_POSTS(state, data){
            state.posts = data;
        },
        SET_FILTER(state, data){
            state.filter = data;
        },
        SET_SEARCH(state, data){
            state.q = data;
        }
    },

    actions:{
        setPosts({commit}){
            axios.get('/api/posts')
            .then((response) => commit('SET_POSTS',response.data)
            )
        },
        searchPost({commit}){
            axios.get('/api/posts/'+ this.state.q).then((response) => {
                commit('SET_POSTS',response.data)
                console.log(response.data)
              })
        }
    }
})

export default store
