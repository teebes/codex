<template>
  <div class="foo">
    <div v-for="post in posts" :key="post.id">
      <div>{{ post.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const resp = await context.$axios.get("http://localhost:3001/posts");
    return {
      posts: resp.data
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/colors";
</style>
