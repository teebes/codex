<template>
  <Post 
    :created_ts="post.created_ts" 
    :title="post.title" 
    :content="post.content" 
    :summary="post.summary" 
    :author="post.author"/>
</template>

<script>
import BlogService from "@/services/BlogService.js";
import Post from "@/components/Post.vue";

export default {
  components: {
    Post
  },
  async asyncData({ route }) {
    const path = route.path;
    const post = await BlogService.getPostByPath(path);
    return {
      post: post
    };
  }
};
</script>