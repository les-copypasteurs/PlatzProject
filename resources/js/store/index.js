
import { createStore } from "vuex"
import axios from 'axios'

const store = createStore({
    state:{
        name: "Vue",
        posts: [],
        filter:[1,2,3,4,5],
        limit: 20,
        index: 0,
        q: "",
        newComment: {
            content: "hello",
            user: 1
        }
    },
    getters:{
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
        },
        SET_COMMENT(state, data){
            state.newComment = data;
        },
        SET_NEWCOMMENT(state, data){
            state.posts[data.post_id].comments = data;
        }
    },

    actions:{
        setPosts({commit}){
            axios.get('/api/posts')
            .then((response) => {
                commit('SET_POSTS',response.data)
                console.log(response.data)

            })
        },
        searchPost({commit}){
            axios.get('/api/posts/'+ this.state.q)
            .then((response) => {
                commit('SET_POSTS',response.data)
                console.log(response.data)
              })
        },
        addComment({commit}){
            axios.post('/api/comments/create'+ this.state.newComment)
            .then((response) => {
                commit('SET_COMMENT',response.data)
                console.log(response.data)
              })
        }
    }
})

export default store
