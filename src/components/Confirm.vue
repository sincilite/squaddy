<template>
  <div class="confirm">
    <v-container fluid="fluid" class="pt-4">
      <v-row class="mb-4 ml-4 mr-4">
        <v-col xs12>
          <v-col xs12>
              <v-card v-for="item in items" class="mb-4">
                <v-card-row height="200px" class="primary mb-2 blue darken-4 white--text">
                    <v-card-title style="text-align: left;">
                    {{ item.day }} {{ item.date }} <br>
                    {{ item.location }}<br>
                    {{ item.time }}
                    </v-card-title>
                  </v-card-row>
                  <v-card-row action>
                  <span class="no-h-padding">Currently {{ item.remaining }} places of {{ item.total }} available</span>
                  <v-spacer></v-spacer>
                    <attending-button :item="item" v-on:attendanceChange="item.remaining = $event"></attending-button>
                  </v-card-row>
              </v-card>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>

import axios from "axios"
import AttendingButton from "./actions/Attending.vue"

export default {
  name: "index",
  data () {
    return {
      remaining: 10,
      total: 18,
      isPlaying: false,
      buttonLabel: "I'm in!",
      items: this.getGames()
    }
  },
  components: {
    "attending-button": AttendingButton
  },
  methods: {
    checkTotals () {

    },
    getGames () {
      var api = process.env.API_HOST
      var self = this
      axios.get(api + "/games.php")
      .then(function (response) {
        self.items = response.data.data
      })
      .catch(function (error) {
        self.logError(error)
      })
    },
    logError (error) {
      console.log(error)
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
