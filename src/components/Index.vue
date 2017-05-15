<template>
    <div>
        <md-layout>
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
        </md-layout>
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
