<template>
<v-app>
<div class="post-page" v-if="post">
  <h1>Post No {{ post.id }}</h1>
  <h2>{{ post.title }}</h2>
  <p> {{ post.body }} </p>
</div>
<div v-else>Loading posts...</div>
</v-app>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      post: null
    }
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.id)
      .then((res) => res.json())
      .then((data) => (this.post = data))
      .catch((err) => console.log(err.message))
  }
}
</script>
