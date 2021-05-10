<!--template>
<v-app id="inspire">
    <v-container fluid>
      <v-data-iterator
        :items="posts"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        hide-default-footer
      >
        <template>
          <v-row>
            <v-col
              v-for="post in posts"
              :key="post.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card>
                <router-link :to="{ name: 'PostDetails', params: { id: post.id}}" class="post-links font-weight-regular">
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

        <template v-slot:footer>
          <v-row
            class="mt-2"
            align="center"
            justify="center"
          >
            <span class="grey--text">Items per page</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  text
                  color="primary"
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <span
              class="mr-4
              grey--text"
            >
              Page {{ page }} of {{ numberOfPages }}
            </span>
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="mr-1"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="ml-1"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      itemsPerPageArray: [5, 10],
      page: 1,
      itemsPerPage: 10,
      posts: []
    }
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message))
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.posts.length / this.itemsPerPage)
    }
  },
  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    }
  }
}
</script-->
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
                <router-link :to="{ name: 'PostDetails', params: { id: post.id}}" class="post-links font-weight-regular">
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
          <v-row
            class="mt-9"
            align="center"
            justify="center"
          >
          <v-btn
              fab
              dark
              color="blue darken-3"
              class="mr-1"
              v-if="page != 1" @click="page--"
            >
            <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="mr-1" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber" :key="pageNumber"> {{pageNumber}}
              </v-btn>
                <v-btn
              fab
              dark
              color="blue darken-3"
              class="mr-1"
              @click="page++" v-if="page < pages.length"
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
      axios.get(this.baseUrl + 'posts')
        .then(response => {
          this.posts = response.data
        })
        .catch(response => {
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
      const from = (page * perPage) - perPage
      const to = (page * perPage)
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
