<template>
  <div>
    <div id="wrapper-navbar">
      <div class="navbar object">
        <div id="wrapper-bouton-icon">
          <div id="bouton-ai" v-on:click="set('[1]')"><img src="/assets/img/icon-ai.svg" alt="illustrator" title="Illustrator" height="28" width="28"></div>
          <div id="bouton-psd" v-on:click="set('[2]')"><img src="/assets/img/icon-psd.svg" alt="photoshop" title="Photoshop" height="28" width="28"></div>
          <div id="bouton-theme" v-on:click="set('[3]')"><img src="/assets/img/icon-themes.svg" alt="theme" title="Theme" height="28" width="28"></div>
          <div id="bouton-font" v-on:click="set('[4]')"><img src="/assets/img/icon-font.svg" alt="font" title="Font" height="28" width="28"></div>
          <div id="bouton-photo" v-on:click="set('[5]')"><img src="/assets/img/icon-photo.svg" alt="photo" title="Photo" height="28" width="28"></div>
          <div id="bouton-premium" v-on:click="set('[1,2,3,4,5]')"><img src="/assets/img/icon-premium.svg" alt="premium" title="Premium" height="28" width="28"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    methods: {
             set(value) {
          this.$store.commit('SET_FILTER', value)
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
