<template>
  <v-app id="inspire">
    <v-container fluid>
      <template>
        <v-row>
          <v-col
            v-for="post in displayedPosts"
            :key="post.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <router-link
                :to="{ name: 'PostDetails', params: { id: post.id } }"
                class="post-links font-weight-regular"
              >
                <v-card-title class="subheading font-weight-normal">
                  <h3>{{ post.id }}</h3>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-title class="subheading font-weight-regular">
                  <h3>{{ post.title }}</h3>
                </v-card-title>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
      </template>
      <template class="pagination-links">
        <v-row class="mt-9" align="center" justify="center">
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            v-if="page != 1"
            @click="page--"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            v-for="pageNumber in pages.slice(page - 1, page + 5)"
            @click="page = pageNumber"
            :key="pageNumber"
          >
            {{ pageNumber }}
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="page++"
            v-if="page < pages.length"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: [],
      baseUrl: 'https://jsonplaceholder.typicode.com/',
      page: 1,
      perPage: 10,
      pages: []
    }
  },
  methods: {
    getPosts () {
      axios
        .get(this.baseUrl + 'posts')
        .then((response) => {
          this.posts = response.data
        })
        .catch((response) => {
          console.log(response)
        })
    },
    setPages () {
      const numberOfPages = Math.ceil(this.posts.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate (posts) {
      const page = this.page
      const perPage = this.perPage
      const from = page * perPage - perPage
      const to = page * perPage
      return posts.slice(from, to)
    }
  },
  computed: {
    displayedPosts () {
      return this.paginate(this.posts)
    }
  },
  watch: {
    posts () {
      this.setPages()
    }
  },
  created () {
    this.getPosts()
  }
}
</script>
