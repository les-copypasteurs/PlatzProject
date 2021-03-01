// ./src/router.js
import Vue    from 'vue'
import Router from 'vue-router'

// Chargement des composants des différentes routes
import PostsIndex from './components/Posts/Index'
// import PostsShow  from './components/Posts/Show'

// Création du routing
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: PostsIndex
    }
    // {
    //   path: '/posts/:id',
    //   name: 'show',
    //   component: PostsShow
    // },
    // { // Et en envoyant des props au composant !!!
    //   path: '/posts/test',
    //   name: 'test',
    //   component: Poststest,
    //   props: { test: 'coucou' }
    // }
  ]
})