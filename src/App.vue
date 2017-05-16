<template>
  <div id="app">
    <md-layout md-gutter>
      <md-layout md-align="center">
        <!--img src="./assets/logo-resize.png">-->
      </md-layout>
    </md-layout>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style>
  .grid > div {
    margin-bottom: 10px;
    background-color: #ccc;
  }
</style>
