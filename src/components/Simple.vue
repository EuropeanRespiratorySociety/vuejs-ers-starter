<template>
<transition name="test" mode="out-in">
<v-container>
    <v-layout row >
      <v-flex xs12 sm12 md10 lg10 offset-md1 offset-lg1>
        <v-card id="test" class="card--flex-toolbar">
          <v-toolbar card class="white">
            <v-toolbar-title class="body-2 grey--text">{{category.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>

          <v-divider></v-divider>
          <v-card-text v-html="category.body"></v-card-text>
        </v-card>
        
        <v-container grid-list-md>
          <v-layout v-if="news && news.length" row wrap>
            <v-flex v-for="post of news" xs12 sm6 :key="post.slug">
              <v-card>
                <v-card-media v-if="post.image" :src="post.image" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{post.title}}</h3>
                    <p><v-icon class="published">query_builder</v-icon>{{post.createdOn}}</p>
                    <div v-html="post.shortLead"></div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn :href="`/${post.slug}`" flat color="orange">More...</v-btn>
                  <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <div class="text-xs-center">
          <v-pagination :length="length" v-model="page"></v-pagination>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</transition>  
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Simple',
    data () {
      return {
        fixed: false
      }
    },

    created () {
      this.fetchData()
    },

    watch: {
      'page': function (num) {
        this.$router.push({ path: `/${this.$route.params.slug}/page/${num}` })
        this.fetchData()
      }
    },

    computed: {
      news () {
        return this.$store.state.news
      },
      skip () {
        return this.$store.state.skip
      },
      limit () {
        return this.$store.state.limit
      },
      category () {
        return this.$store.state.category
      },
      length () {
        return this.$store.state.length
      },
      page: {
        get () {
          return this.$store.state.pageNumber
        },
        set (val) {
          this.pageNumber(val)
        }

      }
    },

    methods: {
      ...mapActions([
        'getNews',
        'pageNumber'
      ]),
      fetchData () {
        const payload = {
          pageNumber: parseInt(this.$route.params.id) || this.page,
          slug: this.$route.params.slug,
          limit: this.$store.state.limit,
          skip: this.$store.state.skip
        }
        this.getNews(payload)
      }
    }

  }
</script>

<style lang="stylus">
  @import '../stylus/main'
  .published {
    font-size:18px!important;
    padding-right:5px;
  }

  .test-enter-active, .test-leave-active {
      transition: opacity 1s
  }
  .test-enter, .test-leave-to {
      opacity: 0
  }
</style>
