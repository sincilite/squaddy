<template>

    <div class="login">

        <v-layout row class="mb-2 ml-2 mr-2">
           <v-flex xs12 sm8 md3 class="centre-align">
              <v-alert error v-model="alertState">
                {{ alertMessage }}
              </v-alert>
              <v-card>
                  <v-card-row class="primary darken-1">
                    <v-card-title>
                      <span class="white--text">Login</span>
                    </v-card-title>
                  </v-card-row>
                  <v-card-text>
                    <v-layout row wrap class="mb-2 ml-2 mr-2">
                      <v-flex xs12>
                          <v-text-field
                            slot="activator"
                            label="Email address"
                            type="email"
                            prepend-icon="person"
                          ></v-text-field>
                      </v-flex>
                    </v-layout>
                    <v-layout row wrap class="mb-2 ml-2 mr-2">
                      <v-flex xs12>
                          <v-text-field
                            slot="activator"
                            label="Password"
                            type="password"
                            prepend-icon="vpn_key"
                          ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-row actions>
                   <v-btn type="submit"
                   primary
                   :loading="loading"
                   @click.native="submitForm"
                   :disabled="loading"
                   class="white--text">Login</v-btn>
                </v-card-row>
              </v-card>
           </v-flex>
        </v-layout>
    </div>

</template>
<script>
import axios from "axios"

export default {
  name: "login",
  data () {
    return {
      loader: null,
      loading: false,
      alertState: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
    }
  },
  methods: {
    startLoader () {
      this.loader = "loading"
    },
    stopLoader () {
      this.loader = null
      this.loading = false
    },
    logError (error) {
      console.log("LOGGIN ERROR")
      console.log(error)
    },
    submitForm () {
      var self = this
      self.startLoader()
      var api = process.env.API_HOST

      this.alertState = false
      axios.post(api + "/login.php", {
        notifications: {
          occurance: this.notificationOccurance,
          day: this.notificationDay,
          time: this.notificationTime
        },
        game: {
          occurance: this.occurance,
          day: this.day,
          time: this.time,
          location: this.location,
          max: this.max
        }
      })
      .then(function (response) {
        self.stopLoader()
        console.log(response.data)
        if (response.data.result === true) {
          self.successState = true
          self.$router.push("Games")
        } else {
          self.alertState = true
          self.alertMessage = "The login details you provided could not be found, please try again"
        }
      })
      .catch(function (error) {
        self.stopLoader()
        self.alertState = true
        self.alertMessage = "Your game settings could not be updated, please try again."
        self.logError(error)
      })
    }
  }
}
</script>
