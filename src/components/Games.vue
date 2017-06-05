<template>
  <v-card>
    <v-card-title>
      Your Games
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-bind:headers="headers"
        v-bind:items="items"
        v-bind:search="search"
        hide-actions
      >
      <template slot="items" scope="props">
        <td class="text-xs-right">{{ props.item.location }}</td>
        <td class="text-xs-right">{{ props.item.date }}</td>
        <td class="text-xs-right">{{ props.item.time }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios"

export default {
  data () {
    return {
      search: "",
      pagination: {},
      headers: [
        {
          text: "Where",
          left: true,
          sortable: false,
          value: "location"
        },
        { text: "When", value: "date" },
        { text: "Time", value: "time" }
      ],
      items: this.getGames()
    }
  },
  methods: {
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
    }
  }
}
</script>
