<template>
  <v-btn v-bind:class="classObject" v-on:click.native="toggleGame()">
    <span v-if="this.item.playing">{{ playing }}</span>
    <span v-else>{{ notPlaying }}</span>
    <v-icon :class="{ 'white--text': this.item.playing }" class="icon--right">
      <span v-if="this.item.playing">cancel</span>
      <span v-else>check_circle</span>
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    toggleGame () {
      if (this.item.playing === true) {
        this.item.playing = false
      } else {
        this.item.playing = true
      }
    }
  },
  computed: {
    classObject: function () {
      var classes = {}

      if (this.item.playing === true) {
        classes.primary = this.item.playing
        classes["white--text"] = this.item.playing
      }

      return classes
    }
  },
  data () {
    return {
      playing: "I can't play",
      notPlaying: "I can play!"
    }
  }
}
</script>
