<template>
  <div class="confirm">
    <v-container fluid="fluid" class="pt-4">

      <form v-on:submit.prevent="submitForm">
        <v-row class="mb-4 ml-4 mr-4">
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
                    <v-col xs12 sm12>
                      <v-text-field
                        name="input-1"
                        label="Whats the maximum number of players?"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mb-4 ml-4 mr-4">
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
export default {
  name: "manage",
  data () {
    return {
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
      ]
    }
  },
  methods: {
    submitForm: function () {
      this.$http.post('api/messages', userInfo);
    }
  }
}
</script>
