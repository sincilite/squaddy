<template>
    <div>

      <v-container fluid="fluid">
        <v-row>
          <v-col xs12>
            <v-card class="primary">
              <v-card-text>12</v-card-text>
            </v-card>
          </v-col>
          <v-col xs6 v-for="i in 2" :key="i">
            <v-card class="secondary">
              <v-card-text>6</v-card-text>
            </v-card>
          </v-col>
          <v-col xs4 v-for="i in 3" :key="i">
            <v-card class="primary">
              <v-card-text>4</v-card-text>
            </v-card>
          </v-col>
          <v-col xs3 v-for="i in 4" :key="i">
            <v-card class="secondary">
              <v-card-text>3</v-card-text>
            </v-card>
          </v-col>
          <v-col xs2 v-for="i in 6" :key="i">
            <v-card class="primary">
              <v-card-text>2</v-card-text>
            </v-card>
          </v-col>
          <v-col xs1 v-for="i in 12" :key="i">
            <v-card class="secondary">
              <v-card-text>1</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>



        <!--<md-layout>
            <md-layout md-align="center">
                <md-card>
                    <md-card-header>
                        <div class="md-title">Monday 15th May 2017</div>
                        <div class="md-subhead">Rossett Sport Center, 6pm</div>
                    </md-card-header>
                    <md-button md-with-hover class="md-raised" v-bind:class="classObject" v-on:click.native="confirmGame">{{ buttonLabel }}</md-button>
                </md-card>
            </md-layout>
        </md-layout>
        <md-layout>
            <md-layout md-align="center">
                <p>Currently {{ remaining }} places of {{ total }} available</p>
            </md-layout>
        </md-layout>-->
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      remaining: 10,
      total: 18,
      isPlaying: false,
      buttonLabel: 'I\'m in!'
    }
  },
  computed: {
    classObject: function () {
      if (this.isPlaying === false) {
        return 'md-primary'
      } else {
        return 'md-default'
      }
    }
  },
  methods: {
    confirmGame: function (event) {
      if (this.isPlaying === false && this.checkPlaces()) {
        this.remaining = this.remaining - 1
        this.isPlaying = true
        this.buttonLabel = 'Drop out'
      } else {
        this.dropOut()
      }
    },
    dropOut: function () {
      this.isPlaying = false
      this.remaining = this.remaining + 1
      this.buttonLabel = 'I\'m in!'
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
