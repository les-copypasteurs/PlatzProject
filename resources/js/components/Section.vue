<template>

  <div id="wrapper-container">

		<div class="container object">

			<div id="main-container-image">

					<section class="work">

						<div v-for="info in data" v-bind:key="info.id">
						<figure class="white">
							<a href="details.html">
								<img src="img/psd-4.jpg" alt="" />
								<dl>
									<dt>{{info.titre}}</dt>
									<dd>{{info.texte}}</dd>
								</dl>
							</a>
                          <div id="wrapper-part-info">
                            <div class="part-info-image"><img src="img/icon-psd.svg" alt="" width="28" height="28"/></div>
                            <div id="part-info">Wordpress nnnnn</div>
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
  axios.get('http://localhost:8000/api/articles').then((response) => {
	this.data = response.data;
	console.log(this.data.titre)
    }).catch((error) => {
		console.log(error)
	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
