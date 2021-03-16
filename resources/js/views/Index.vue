<template>
  <div>
    <link rel="stylesheet" href="/css/style.css">
    <div id="wrapper-container">
      <div class="container object">
        <div id="main-container-image">
          <section class="work">
            <div v-for="(post, i) in posts" v-bind:key="post.id">
              <div v-if="filter.includes(post.categorie[0].id) && i < (index + limit) && i >= index">
                <!-- <div>{{i}} {{limit}}</div> -->
                <figure class="white">
                  <router-link :to="{ name: 'show', params: { postId: post.id, slug: slugify(post.title) }}">
                    <img v-bind:src="'/assets/img/' + post.image" alt="" />
                    <dl style="overflow: hidden;">
                      <dt>{{post.title}}</dt>
                      <dd>{{sliceString(post.content)}}</dd>
                    </dl>
                  </router-link>
                  <div id="wrapper-part-info">
                    <div class="part-info-image">
                      <div v-for="categorie in post.categorie" v-bind:key="categorie.id">
                        <img v-bind:src="'assets/img/icon-' + categorie.name + '.svg'" alt="" width="28" height="28" /></div>
                    </div>
                    <div id="part-info">{{post.title}}</div>
                  </div>
                </figure>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    <div id="wrapper-oldnew">
      <div class="oldnew">
        <div class="wrapper-oldnew-prev" v-on:click="setIndex((index - limit))">
          <div id="oldnew-prev"></div>
        </div>
        <div class="wrapper-oldnew-next" v-on:click="setIndex(index + limit)">
          <div id="oldnew-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    computed: {
      posts() {
        return this.$store.getters.getPosts;
      },
      filter() {
        return this.$store.getters.getFilter;
      },
      limit() {
        return this.$store.getters.getLimit;
      },
      index() {
        return this.$store.getters.getIndex;
      }
    },
    methods: {
      setIndex(value) {
        this.$store.commit('SET_INDEX', value)
      },
    slugify: function(posts) {
      var slug = "";
      var titleLower = posts.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd');
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '');
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-');
      return slug;
    },
    sliceString: function(string) {
      let result = string.slice(0, 150);
      return result;
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
