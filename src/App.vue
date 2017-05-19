<template>
  <div id="app">
    <v-app left-fixed-sidebar>
      <v-toolbar class="blue darken-1">
        <v-toolbar-side-icon @click.native.stop="nav3 = !nav3" />
        <v-toolbar-logo>Toolbar</v-toolbar-logo>
      </v-toolbar>

        <v-sidebar left fixed drawer v-model="nav3">
          <v-list>
            <v-list-item v-for="(link, index) in nav" :key="index">
              <v-list-tile>
                <v-list-tile-title>
                  <router-link :to="link.destination">{{ link.title }}</router-link>
                </v-list-tile-title>
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
      nav3: "",
      nav: [
        { title: "Games", destination: "/games" },
        { title: "Players", destination: "/players" }
      ]
    }
  }
}
</script>
<style lang="stylus">
  @import './stylus/main'
  $color-pack = false
</style>
