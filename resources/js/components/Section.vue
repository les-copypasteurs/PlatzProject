<template>

  <div id="wrapper-container">

		<div class="container object">

			<div id="main-container-image">

					<section class="work">

						<div v-for="info in data" v-bind:key="info.id">
						<figure class="white">
							<a href="details.html">
								<img v-bind:src="'assets/img/' + info.image" alt="" />
								<dl  style="overflow: hidden;">
									<dt>{{info.title}}</dt>
									<dd>{{info.content}}</dd>
								</dl>
							</a>
                          <div id="wrapper-part-info">
                            <div class="part-info-image"><img src="assets/img/icon-psd.svg" alt="" width="28" height="28"/></div>
                            <div id="part-info">{{info.title}}</div>
						</div>
                      </figure>
</div>


					</section>

				</div>
			</div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
  name: 'Section',

  data(){
      return {
data:null,
     }
  },
  mounted(){
      console.log('section is charged');
  axios.get('./api/posts').then((response) => {
	this.data = response.data;
	console.log(this.data)
    }).catch((error) => {
		console.log(error)
	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
