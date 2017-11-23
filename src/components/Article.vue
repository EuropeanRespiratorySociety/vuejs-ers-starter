<template>
  <v-flex xs12 sm12 md8 lg8 offset-md2 offset-lg2>
    <v-card id="test" class="card--flex-toolbar">
      <v-toolbar card class="white">
        <v-toolbar-title class="headline grey--text text--darken-3">{{article.title}}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-divider></v-divider>
      <v-card-text class="content">
        <span v-if="article.leadParagraph" v-html="article.leadParagraph"></span>
        <span v-if="article.body" v-html="article.body"></span>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Article',
    data () {
      return {
        fixed: false
      }
    },

    created () {
      this.fetchData()
    },

    computed: {
      slug () {
        return this.$store.getters.slug
      },
      article () {
        return this.$store.state.article
      }
    },

    methods: {
      ...mapActions([
        'getArticle'
      ]),
      fetchData () {
        const payload = {
          slug: this.slug
        }
        this.getArticle(payload)
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

  .content h3 {
    font-size: 20px!important;
    font-weight: 500!important;
    line-height: 1!important;
    letter-spacing: .02em!important;
    margin: 20px 0 4px 0!important;
  }

  .content ul {
    margin-left: 30px;
  }
</style>
