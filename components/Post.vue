<template>
  <div class='markdown-post'>
    <h1>{{ title }}</h1>
    <div class='summary'>{{ summary }}</div>
    <div class="author-and-posted flex">
      <div class='author'>By <span class='author-name'>{{ author.username }}</span></div>
      <div class='posted ml-8'>{{ posted_date }}</div>
    </div>
    
    
    <div v-html="content_html" class='mt-12'>Post contents</div>
  </div>
</template>

<script>
import showdown from "showdown";
import format_date from "@/utils/format_date.js";

export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.summary
        }
      ]
    };
  },
  props: ["created_ts", "title", "content", "summary", "author"],
  data() {
    const raw_markdown = this.content;
    const html = new showdown.Converter().makeHtml(raw_markdown);

    // Remove title
    var h1Removed = html.replace(/<h1.*>.*?<\/h1>/gi, "");

    return {
      content_html: h1Removed
    };
  },
  computed: {
    posted_date() {
      console.log(this.created_ts);
      return format_date(this.created_ts);
      const ts = this.post_ts;
      const posted = new Date(Date.parse(ts)).toLocaleDateString();
      return posted;
    }
  }
};
</script>