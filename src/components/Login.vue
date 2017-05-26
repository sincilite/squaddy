<template>

    <div class="login">

        <v-layout row class="mb-2 ml-2 mr-2">

           <v-flex xs12 sm8 md3 class="centre-align">
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
                   :loading="loading3"
                   @click.native="submitForm"
                   :disabled="loading3"
                   class="white--text">Login</v-btn>
                </v-card-row>
              </v-card>
           </v-flex>


        </v-layout>

    </div>

</template>
<script>
export default {
  name: "login",
  data () {
    return {
      loader: null,
      loading3: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    }
  },
}
</script>
