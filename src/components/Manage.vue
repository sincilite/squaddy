<template>
    <div>
        <md-layout md-gutter="16">
          <md-layout md-align="center">
                <md-card>
                    <md-card-header>
                        <div class="md-title">Monday 15th May 2017</div>
                        <div class="md-subhead">Rossett Sport Center, 6pm</div>
                    </md-card-header>
                    <md-button md-with-hover class="md-raised" v-bind:class="classObject" v-on:click.native="confirmGame">{{ buttonLabel }}</md-button>
                </md-card>
            </md-layout>
            <md-layout md-align="center">
                <md-card>
                    <md-card-header>
                        <div class="md-title">Monday 15th May 2017</div>
                        <div class="md-subhead">Rossett Sport Center, 6pm</div>
                    </md-card-header>
                    <md-button md-with-hover class="md-raised" v-bind:class="classObject" v-on:click.native="confirmGame">{{ buttonLabel }}</md-button>
                </md-card>
            </md-layout>
        </md-layout>
    </div>
</template>

<script>
export default {
  name: 'manage'
}
</script>
