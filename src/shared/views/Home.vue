<template lang="html">
  <div id="home">
    <h2 class="text">This is the {{name}} page</h2>
    <img :src="logo">
    <counter></counter>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import ryanLogo from './Ryan-Lindskog-Logo-Small.png'
export default {
  metaInfo: {
    title: 'Home'
  },
  data() {
    return {
      name: 'Home',
      logo: ryanLogo
    }
  },
  components: { Counter }
}
</script>

<style lang="css">
  #home {
    text-align: center;
  }
</style>
