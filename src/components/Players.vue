<template>
  <div class="teams">
      <v-container fluid="fluid">
        <v-row class="mb-2 ml-2 mr-2">
          <v-col xs12 sm6>
            <v-list>
                <v-list-item v-for="(player, index) in players"v-bind:data="player" v-bind:key="player.id">
                    <v-list-tile avatar>
                      <v-list-tile-content>
                        <v-list-tile-title v-text="player.name" />
                        <v-list-tile-sub-title v-html="player.email" />
                      </v-list-tile-content>
                      <v-list-tile-avatar>
                        <v-icon large class="grey--text text--darken-2" @click.native="removePlayer(index)">delete</v-icon>
                      </v-list-tile-avatar>
                    </v-list-tile>
                </v-list-item>
            </v-list>
          </v-col>
          <v-col xs12 sm6>
            <v-card class="mt-2">
              <v-card-row class="blue darken-1">
                <v-card-title>
                  <span class="white--text">New player</span>
                </v-card-title>
              </v-card-row>
              <v-card-text>
                <v-container fluid>
                  <v-row>
                    <v-col xs12>
                      <v-text-field
                        name="input-7-1"
                        label="Name"
                        v-model="name"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col xs12>
                      <v-text-field
                        type="email"
                        name="input-7-2"
                        label="Email address"
                        v-model="email"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-row actions>
                 <v-btn light flat @click.native="cancel()">Cancel</v-btn>
                 <v-btn class="blue--text darken-1" light flat @click.native="addPlayer()">Add</v-btn>
              </v-card-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>
<script>
export default {
  name: "teams",
  data () {
    return {
      name: "",
      email: "",
      players: [
        { id: 1, name: "Player one", email: "test@test.com" },
        { id: 2, name: "Player two", email: "test@test.com" },
        { id: 3, name: "Player three", email: "test@test.com" },
        { id: 4, name: "Player four", email: "test@test.com" },
        { id: 5, name: "Player five", email: "test@test.com" },
        { id: 6, name: "Player six", email: "test@test.com" },
        { id: 7, name: "Player seven", email: "test@test.com" }
      ]
    }
  },
  methods: {
    cancel () {
      this.name = ""
      this.email = ""
    },
    removePlayer (index) {
      this.players.splice(index, 1)
    },
    addPlayer () {
      console.log(this.name)
      this.players.unshift({ name: this.name, email: this.email })
      this.cancel()
    }
  }

}
</script>
