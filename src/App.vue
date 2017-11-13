<template>
  <v-app class="Simple">
    <v-toolbar 
      app
      fixed
      id="header-t"
      light class="primary transparent elevation-0" 
      v-scroll="onScroll"
      prominent>
      <v-toolbar-side-icon @click.stop="toggle()"></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>  
    </v-toolbar>
    <v-card app class="grey lighten-5" flat>
      <v-parallax src="https://www.ersnet.org/assets/preview/node/o:383143a9427e5caae1bb?name=image1800&size=1800"></v-parallax>
    </v-card>
    <sleep-navigation></sleep-navigation>
    <main id="main-container">
        <router-view></router-view>
    </main>
    <sleep-footer></sleep-footer>
  </v-app>
</template>
<script>
  import SleepFooter from './components/layout/SleepFooter'
  import SleepNavigation from './components/layout/SleepNavigation'
  import { mapActions } from 'vuex'

  export default {
    name: 'App',
    data () {
      return {
        title: 'Vuetify.js',
        offsetTop: 0,
        height: 600,
        rightDrawer: false
      }
    },
    methods: {
      ...mapActions([
        'toggleDrawer'
      ]),

      toggle (item) {
        this.toggleDrawer()
      },

      onScroll (e) {
        let container = document.getElementById('header-t')
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop

        if (this.offsetTop > 100) {
          container.classList.remove('transparent')
        }

        if (this.offsetTop < 100) {
          container.classList.add('transparent')
        }
      }
    },
    components: { SleepFooter, SleepNavigation }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  .card--flex-toolbar {
    margin-top: -80px;
  }

  .transparent {
    background: transparent;
    background-size: cover;
  }

  #main-container {
    margin-bottom: 55px;
  }
</style>
