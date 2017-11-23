<template>
  <v-navigation-drawer 
    app
    fixed
    persistent
    v-model="drawer" 
    :mini-variant="mini" 
    light
    disable-route-watcher
  >
    <v-list class="pa-1">
      <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
          <v-list-tile avatar tag="div">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Title</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" :href="item.slug" @click="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'drawer',
    data () {
      return {
        mini: false,
        items: [
          { title: 'Home', icon: 'dashboard', slug: '/' },
          { title: 'About', icon: 'question_answer', slug: '/news' }
        ],
        right: null
      }
    },

    methods: {
      ...mapActions([
        'setDrawer'
      ])
    },

    computed: {
      drawer: {
        get: function () {
          return this.$store.state.drawer
        },
        set: function (value) {
          this.setDrawer(value)
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../stylus/main'
</style>
