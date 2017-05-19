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
                    <v-col xs12 sm4 v-if="occurance == 'Every'">
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
                    <v-col xs12 sm4 v-else-if="occurance == 'On'">
                      <v-dialog
                        persistent
                        lazy
                      >
                        <v-text-field
                          slot="activator"
                          label="Picker in dialog"
                          v-model="date"
                          prepend-icon="event"
                          readonly
                        ></v-text-field>
                        <v-date-picker v-model="date" scrollable data-format="DD-MM-YYYY"></v-date-picker>
                      </v-dialog>
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
                              <v-btn flat primary @click.native="save()">Set</v-btn>
                            </v-card-row>
                          </template>
                        </v-time-picker>
                      </v-dialog>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col xs12 sm4>
                      <v-text-field
                        v-model="max"
                        name="input-1"
                        label="What's the maximum number of players?"
                      ></v-text-field>
                    </v-col>
                    <v-col xs12 sm4>
                      <v-text-field
                        v-model="location"
                        name="input-7-1"
                        label="Where's the game?"
                      ></v-text-field>
                    </v-col>
                    <v-col xs12 sm4>
                      <v-select
                        label="Choose team colours"
                        v-bind:items="colours"
                        v-model="teams"
                        multiple
                        chips
                        light
                        hint="Choose two team colours"
                        persistent-hint
                      />
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
                    <v-col xs12 sm4 v-if="notificationOccurance == 'Every'">
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
                    <v-col xs12 sm4 v-else-if="notificationOccurance == 'On'">
                      <v-dialog
                        persistent
                        lazy
                      >
                        <v-text-field
                          slot="activator"
                          label="Picker in dialog"
                          v-model="notificationDate"
                          prepend-icon="event"
                          readonly
                        ></v-text-field>
                        <v-date-picker v-model="notificationDate" scrollable data-format="DD-MM-YYYY" actions>
                          <template scope="{ save, cancel }">
                            <v-card-row actions>
                              <v-btn flat primary @click.native="cancel()">Cancel</v-btn>
                              <v-btn flat primary @click.native="save()">Saghgfhghe</v-btn>
                            </v-card-row>
                          </template>
                        </v-date-picker>
                      </v-dialog>
                    </v-col>
                    <v-col xs12 sm4>
                      <v-dialog xs12
                        persistent
                        lazy
                      >
                        <v-text-field
                          slot="activator"
                          label="At"
                          v-model="notificationTime"
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
      colourRules: [],
      alertState: false,
      successState: false,
      alertMessage: "",
      notificationOccurance: "Every",
      notificationDay: "",
      notificationDate: "",
      notificationTime: "",
      date: "",
      occurance: "Every",
      day: "",
      time: "",
      teams: [],
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
      location: "",
      colours: [
        "Red",
        "Blue",
        "Black",
        "White",
        "Green",
        "Yellow",
        "Orange"
      ]
    }
  },
  methods: {
    maxLength: function () {
      console.log("esgf")
      return "Error"
    },
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
      self.$router.push("Teams")
      self.alertState = true
      self.alertMessage = "Your game settings could not be updated, please try again."
    })
    }
  }
}
</script>
