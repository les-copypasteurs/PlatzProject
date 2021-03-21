<template>
  <div>
    <a name="ancre"></a>
    <!-- CACHE -->
    <div class="cache" style="display: none;"></div>
    <!-- HEADER -->
    <div id="wrapper-header">
      <div id="main-header" class="object">
        <router-link to='/'>
          <div class="logo"><img src="/assets/img/logo-burst.png" alt="logo platz" height="38" width="90"></div>
        </router-link>
        <div id="main_tip_search">
                  <router-link to='/'>

          <form>
            <input type="text" name="search" id="tip_search_input" @keyup="searchPosts" v-model='q' list="search" autocomplete=off required>
          </form>
                  </router-link>

        </div>
        <div id="stripes"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex'
  export default {
    name: 'Header',
    computed: {
      q: {
        get() {
          return this.$store.state.q
        },
        set(value) {
          this.$store.commit('SET_SEARCH', value)
        }
      }
    },
    methods: {
      searchPosts() {
        this.$store.commit('SET_INDEX', 0)
        this.filteredPosts = []
        console.log(this.$store.getters.getPostsDB);
        this.$store.getters.getPostsDB.forEach(post => {
          if (post.title.includes(this.q) || post.content.includes(this.q)) {
            this.filteredPosts.push(post)
          }
        });
        this.$store.commit('SET_POSTS', this.filteredPosts)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
