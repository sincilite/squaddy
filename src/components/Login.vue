<template>

    <div class="login">

        <v-layout row class="mb-2 ml-2 mr-2">
             <v-flex xs12 sm3 class="centre-align">
                <v-card>
                    <v-card-row class="blue darken-1">
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
                              readonly
                            ></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-card-text>
                </v-card>
             </v-flex>
        </v-layout>

    </div>

</template>
<script>
export default {
  name: "teams",
  data () {
  }
}
</script>
