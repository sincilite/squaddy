<template>
  <v-btn v-bind:class="classObject" v-on:click.native="toggleGame()" v-if="this.item.remaining > 0">
    <span v-if="this.item.playing">{{ playing }}</span>
    <span v-else>{{ notPlaying }}</span>
    <v-icon :class="{ 'white--text': this.item.playing }" class="icon--right">
      <span v-if="this.item.playing">cancel</span>
      <span v-else>check_circle</span>
    </v-icon>
  </v-btn>
  <v-btn v-bind:class="classObject" v-on:click.native="toggleGame()" v-else-if="this.item.remaining <= 0">
    <span v-if="this.item.playing">{{ playing }}</span>
    <span v-else>{{ notPlaying }}</span>
    <v-icon :class="{ 'white--text': this.item.playing }" class="icon--right">
      <span v-if="this.item.playing">cancel</span>
      <span v-else>check_circle</span>
    </v-icon>
  </v-btn>
</template>

<script>
import axios from "axios"

export default {
  props: ["item"],
  methods: {
    toggleGame () {
      var remaining
      if (this.item.playing === true) {
        this.item.playing = false
        remaining = this.item.remaining + 1
        this.$emit("attendanceChange", remaining)
      } else {
        this.item.playing = true
        remaining = this.item.remaining - 1
        this.$emit("attendanceChange", remaining)
      }
    },
    setAttendance () {
      var api = process.env.API_HOST
      var self = this
      axios.post(api + "/games-attendance.php", { id: self.item.id, playing: self.item.playing, user: 1 })
      .then(function (response) {
        self.items = response.data.data
      })
      .catch(function (error) {
        self.logError(error)
      })
    },
    logError (error) {
      console.log(error)
    }
  },
  watch: {
    "item.playing": function () {
      this.setAttendance()
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
