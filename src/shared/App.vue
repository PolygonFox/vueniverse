<template lang="html">
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import { NavBar } from './components'
  export default {
    components: {
      NavBar
    }
  }
</script>
<style lang="css">
  #app {
    text-align: center
  }
  #nav {
    margin-top: 50px;
  }
  .link {
    font-size: 30px;
    color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    padding: 15px;
    margin: 5px;
    background-color: teal;
    transition-duration: .25s;
  }
  .link:hover {

    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.3);
  }
</style>
