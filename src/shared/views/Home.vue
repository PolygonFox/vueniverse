<template lang="html">
  <div id="home">
    <h2 class="text">This is the {{name}} page</h2>
    <counter></counter>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'
export default {
  metaInfo: {
    title: 'Home'
  },
  data() {
    return {
      name: 'Home'
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
