<template>
<div>
  <div id="wrapper-container">

		<div class="container object">

			<div id="main-container-image">

					<section class="work">

						<div v-for="post in posts" v-bind:key="post.id">
						<figure class="white">
							
							<router-link :to="{ name: 'detail', params: { postId: post.id, slug: slugify(post.title) }}"> 
								<img v-bind:src="'assets/img/' + post.image" alt="" />
								<dl  style="overflow: hidden;">
									<dt>{{post.titre}}</dt>
									<dd>{{post.content}}</dd>
								</dl>
							 </router-link>

                          <div id="wrapper-part-info">
                            <div class="part-info-image"><img src="assets/img/icon-psd.svg" alt="" width="28" height="28"/></div>
                            <div id="part-info">{{post.titre}}</div>
						</div>
                      </figure>
</div>


					</section>

				</div>
			</div>

  </div>
     <div id="wrapper-oldnew">
    <div class="oldnew">
        <div class="wrapper-oldnew-prev">
            <div id="oldnew-prev"></div>
        </div>
            <div class="wrapper-oldnew-next">
            <div id="oldnew-next"></div>
    </div>
      </div>
</div>
  </div>
</template>

<script>
  export default {
  name: 'Section',
  created(){
	this.$store.dispatch('setPosts');
	
  },
  computed: {
	  posts(){
		  return this.$store.getters.getPosts;
	  }
  },

  methods: {
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
    }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
