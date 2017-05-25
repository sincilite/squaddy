<template>
  <div id="app">
    <v-app left-fixed-sidebar>
        <v-navigation-drawer persistent light :mini-variant.sync="mini" v-model="drawer">
          <v-list class="pa-0">
            <v-list-item>
              <v-list-tile avatar tag="div">
                <v-list-tile-avatar>
                  <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>John Leider</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-btn icon @click.native.stop="mini = !mini">
                    <v-icon>chevron_left</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item v-for="(link, index) in nav" :key="index">
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>
                  <router-link :to="link.destination">{{ link.title }}</router-link>
                </v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar class="indigo">
          <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title>Toolbar</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn light icon @click.native.stop="right = !right">
            <v-icon>exit_to_app</v-icon>
          </v-btn>
        </v-toolbar>
        <main>
          <v-container>
            <router-view></router-view>
          </v-container>
        </main>
      <v-footer class="blue darken-1">Footer</v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
      drawer: false,
      nav: [
        { title: "Home", destination: "/", icon: "dashboard" },
        { title: "Games", destination: "/games", icon: "local_activity" },
        { title: "Players", destination: "/players", icon: "people" },
        { title: "Manage", destination: "/new-game", icon: "settings" }
      ],
      mini: false,
      right: null
    }
  }
}
</script>
<style lang="stylus">
  @import './stylus/main'
  $color-pack = false
</style>
