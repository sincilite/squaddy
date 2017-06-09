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
        <td class="text-xs-left">{{ props.item.location }}</td>
        <td class="text-xs-left">{{ props.item.date }}</td>
        <td class="text-xs-left">{{ props.item.time }}</td>
        <td class="text-xs-left">
          <attending-button :item="props.item"></attending-button></td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios"
import AttendingButton from "./actions/Attending.vue"

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
        {
          text: "When",
          value: "date",
          left: true
        },
        {
          text: "Time",
          value: "time",
          left: true
        }
      ],
      items: this.getGames()
    }
  },
  components: {
    "attending-button": AttendingButton
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
