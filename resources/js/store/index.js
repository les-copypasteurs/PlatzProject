
import { createStore } from "vuex"
import axios from 'axios'

const store = createStore({
    state:{
        name: "Vue",
        postsDB: [],
        posts: [],
        filter:[1,2,3,4,5],
        limit: 20,
        index: 0,
        q: ""
    },
    getters:{
        getPostsDB(state){
            return state.postsDB
        },
        getPosts(state){
            return state.posts
        },
        getFilter(state){
            return state.filter
        },
        getLimit(state){
            return state.limit
        },
        getIndex(state){
            return state.index
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
        SET_POSTSDB(state, data){
            state.postsDB = data;
        },
        SET_POSTS(state, data){
            state.posts = data;
        },
        SET_FILTER(state, data){
            state.filter = data;
        },
        SET_LIMIT(state, data){
            state.limit = data;
        },
        SET_INDEX(state, data){
            if (data > 0) {
                if (data < state.posts.length) {
                    state.index = data;
                }
            }else{
                state.index = 0;
            }
        },
        SET_SEARCH(state, data){
            state.q = data;
        }
    },

    actions:{
        setPostsDB({commit}){
            axios.get('/api/posts')
            .then((response) => {
                commit('SET_POSTSDB',response.data);
                commit('SET_POSTS', this.state.postsDB)
                console.log(this.state.postsDB)

            })
        },
        searchPost({commit}){
            axios.get('/api/posts/'+ this.state.q)
            .then((response) => {
                commit('SET_POSTS',response.data)
                console.log(response.data)
              })
        }
    }
})

export default store
