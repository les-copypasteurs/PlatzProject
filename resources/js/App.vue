<template>
  <div>
  <Header />
  <Filter />
  <Navbar />
  <router-view/>
  <Footer/>

  </div>
</template>

<script>
import Footer from './views/Footer'
import Navbar from './views/Navbar'
import Header from './views/Header'
import Filter from './views/Filter'

export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
    Header,
    Filter
  }
}
</script>

<style>

</style>
