<template>
  <v-app>
    <v-toolbar 
      app
      fixed
      id="header-t"
      light 
      class="primary transparent elevation-0" 
      v-scroll="onScroll"
      prominent
    >
      <v-toolbar-side-icon @click.stop="toggle"></v-toolbar-side-icon>
      <v-toolbar-title v-if="!drawer">Title</v-toolbar-title>  
    </v-toolbar>

      <v-parallax src="https://www.ersnet.org/assets/preview/node/o:383143a9427e5caae1bb?name=image1800&size=1800"></v-parallax>

      <transition name="test" mode="out-in">
        <v-content>
          <v-container fluid>
            <v-layout row>
              <router-view></router-view>
            </v-layout>
          </v-container>
        </v-content>    
      </transition>
    
    <nav-drawer></nav-drawer>
    <footer-bar></footer-bar>
  </v-app>
</template>
<script>
  import FooterBar from './components/layout/FooterBar'
  import NavDrawer from './components/layout/NavDrawer'
  import { mapActions, mapState } from 'vuex'

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

    computed:
      mapState([
        'drawer'
      ]),

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

    components: { FooterBar, NavDrawer }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  .card--flex-toolbar {
    margin-top: -145px;
  }

  .transparent {
    background: transparent;
    background-size: cover;
  }

  .test-enter-active, .test-leave-active {
      transition: opacity 1s
  }
  
  .test-enter, .test-leave-to {
      opacity: 0
  }
</style>
