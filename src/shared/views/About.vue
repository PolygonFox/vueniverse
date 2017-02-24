<template lang="html">
  <div id="about">
    <h2 class="text" >This is the {{name}} page</h2>
    <styled-button></counter>
  </div>
</template>

<script>
import StyledButton from '../components/StyledButton.vue'
export default {
  metaInfo: {
    title: 'About'
  },
  data() {
    return {
      name: 'About'
    }
  },
  components: {
    StyledButton
  }
}
</script>

<style lang="css">
</style>
