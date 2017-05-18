<template>
  <div class="confirm">
    <v-container fluid="fluid" class="pt-4">
      <v-row class="mb-4 ml-4 mr-4">
        <v-col xs12>
          <v-col xs12>
              <v-card>
                <v-card-row height="200px" class="primary mb-2 blue darken-4 white--text">
                    <v-card-title style="text-align: left;">
                    Monday 15th May 2017 <br>
                    Rossett Sport Center<br>
                    6pm
                    </v-card-title>
                  </v-card-row>
                  <v-card-row action>
                  <v-btn flat class="no-h-padding">Currently {{ remaining }} places of {{ total }} available</v-btn>
                  <v-spacer></v-spacer>
                    <v-btn v-bind:class="classObject" v-on:click.native="confirmGame">{{ buttonLabel }}
                      <v-icon class="icon--right">check_circle</v-icon>
                    </v-btn>
                  </v-card-row>
              </v-card>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "index",
  data () {
    return {
      remaining: 10,
      total: 18,
      isPlaying: false,
      buttonLabel: "I'm in!"
    }
  },
  computed: {
    classObject: function () {
      if (this.isPlaying === false) {
        return "primary white--text"
      } else {
        return "default"
      }
    }
  },
  methods: {
    confirmGame: function (event) {
      if (this.isPlaying === false && this.checkPlaces()) {
        this.remaining = this.remaining - 1
        this.isPlaying = true
        this.buttonLabel = "Drop out"
      } else {
        this.dropOut()
      }
    },
    dropOut: function () {
      this.isPlaying = false
      this.remaining = this.remaining + 1
      this.buttonLabel = "I'm in!"
    },
    checkPlaces: function () {
      if (this.remaining > 0) {
        return true
      }
      return false
    }
  }
}
</script>
