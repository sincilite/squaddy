<template>
  <div id="app">
    <v-app left-fixed-sidebar>
      <v-toolbar class="blue darken-1">
        <v-toolbar-side-icon @click.native.stop="nav3 = !nav3" />
        <v-toolbar-logo>Toolbar</v-toolbar-logo>
      </v-toolbar>

        <v-sidebar left fixed drawer v-model="nav3">
          <v-list>
            <v-list-item v-for="i in 3" :key="i">
              <v-list-tile>
                <v-list-tile-title>Item {{ i }}</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-sidebar>
        <v-content>
          <router-view></router-view>
        </v-content>
      <v-footer class="blue darken-1">Footer</v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
      nav3: ""
    }
  }
}
</script>
<style lang="stylus">
  @import './stylus/main'
  $color-pack = false
</style>
