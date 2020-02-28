<template>
  <div>
    <h1 class="hidden">Recent Posts</h1>

    <div v-for="post in posts" :key="post.id" class="mb-12">
      <h2 class="post-title">
        <nuxt-link :to="post.path">{{ post.title }}</nuxt-link>
      </h2>
      <div class="summary">{{ post.summary }}</div>
      <!-- <div class='by'>By Thibaud - {{ posted_date(post.created_ts) }}</div> -->
    </div>
  </div>
</template>

<script>
import BlogService from "@/services/BlogService.js";
import format_date from "@/utils/format_date.js";

export default {
  async asyncData(context) {
    const posts = await BlogService.getRecent();
    return {
      posts: posts
    };
  },
  methods: {
    posted_date: ts => {
      return format_date(ts);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/colors";
@import "@/assets/scss/fonts";

h2.post-title {
  color: inherit;
  font-family: $font-title;
  font-weight: bold;
  font-size: 1.5rem;
  > a:hover {
    text-decoration: none;
  }
}

.summary,
.by {
  color: $color-text-hex-60;
}
</style>
