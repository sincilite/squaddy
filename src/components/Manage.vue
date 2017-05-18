<template>
  <div class="confirm">
    <v-container fluid="fluid">


     <form v-on:submit.prevent="submitForm">
        <v-row class="mb-2 ml-2 mr-2">
          <v-col xs12>
            <v-alert error v-model="alertState">
              {{ alertMessage }}
            </v-alert>
          </v-col>
          <v-col xs12>
            <v-alert success v-model="successState">
              {{ alertMessage }}
            </v-alert>
          </v-col>
        </v-row>
        <v-row class="mb-4 ml-2 mr-2">
          <v-col xs12>
            <v-card>
              <v-card-row class="blue darken-1">
                <v-card-title>
                  <span class="white--text">Game information</span>
                </v-card-title>
              </v-card-row>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col xs12 sm4>
                      <v-select
                        v-bind:items="occurances"
                        v-model="occurance"
                        label="Every"
                        light
                        single-line
                        auto
                        hint="How often do you play?"
                      />
                    </v-col>
                    <v-col xs12 sm4>
                      <v-select
                        v-bind:items="weekdays"
                        v-model="day"
                        label="On"
                        light
                        single-line
                        auto
                        hint="How often do you play?"
                      />
                    </v-col>
                    <v-col xs12 sm4>
                      <v-dialog xs12
                        persistent
                        lazy
                      >
                        <v-text-field
                          slot="activator"
                          label="At"
                          v-model="time"
                          prepend-icon="access_time"
                          readonly
                        ></v-text-field>
                        <v-time-picker v-model="time" actions>
                          <template scope="{ save, cancel }">
                            <v-card-row actions>
                              <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                              <v-btn flat primary @click.native="save()">Save</v-btn>
                            </v-card-row>
                          </template>
                        </v-time-picker>
                      </v-dialog>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col xs12 sm6>
                      <v-text-field
                        v-model="max"
                        name="input-1"
                        label="What's the maximum number of players?"
                      ></v-text-field>
                    </v-col>
                    <v-col xs12 sm6>
                      <v-text-field
                        v-model="location"
                        name="input-7-1"
                        label="Where's the game?"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mb-4 ml-2 mr-2">
          <v-col xs12>
            <v-card>
              <v-card-row class="blue darken-1">
                <v-card-title>
                  <span class="white--text">Notifications</span>
                </v-card-title>
              </v-card-row>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col xs12 sm4>
                      <v-select
                        v-bind:items="occurances"
                        v-model="notificationOccurance"
                        label="Every"
                        light
                        single-line
                        auto
                        hint="Send reminder"
                      />
                    </v-col>
                    <v-col xs12 sm4>
                      <v-select
                        v-bind:items="weekdays"
                        v-model="notificationDay"
                        label="On"
                        light
                        single-line
                        auto
                        hint="How often do you play?"
                      />
                    </v-col>
                    <v-col xs12 sm4>
                      <v-dialog xs12
                        persistent
                        lazy
                      >
                        <v-text-field
                          slot="activator"
                          label="At"
                          v-model="time"
                          prepend-icon="access_time"
                          readonly
                        ></v-text-field>
                        <v-time-picker v-model="notificationTime" actions>
                          <template scope="{ save, cancel }">
                            <v-card-row actions>
                              <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                              <v-btn flat primary @click.native="save()">Save</v-btn>
                            </v-card-row>
                          </template>
                        </v-time-picker>
                      </v-dialog>
                    </v-col>
                  </v-row>
                  <v-card-row actions>
                     <v-btn type="submit" class="blue--text darken-1" light flat>Save</v-btn>
                  </v-card-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </form>
    </v-container>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "manage",
  data () {
    return {
      alertState: false,
      successState: false,
      alertMessage: "",
      notificationOccurance: "",
      notificationDay: "",
      notificationTime: "",
      occurance: "",
      day: "",
      time: "",
      occurances: [
        "Every",
        "On"
      ],
      weekdays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      max: "",
      location: ""
    }
  },
  methods: {
    submitForm: function () {
      var self = this
      this.alertState = false
      axios.post("/user", {
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
      console.log(response)
      self.successState = true
      self.alertMessage = "Your game setting have been updated."
    })
    .catch(function (error) {
      console.log(error)
      self.alertState = true
      self.alertMessage = "Your game settings could not be updated, please try again."
    })
    }
  }
}
</script>
