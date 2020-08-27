<template>
  <div class="markdown-post">
    <h1>{{ title }}</h1>
    <div class="summary">{{ summary }}</div>
    <div class="author-and-posted flex">
      <div class="author">
        By 
        <a href='https://twitter.com/teebesz' v-if="author.username === 'Thibaud'">
          Thibaud
        </a>
        <span v-else class="author-name">{{ author.username }}</span>

      </div>
      <div class="separator mx-4">&mdash;</div>
      <div class="posted">{{ posted_date }}</div>
    </div>

    <div v-html="content_html" class="mt-12 mb-32">Post contents</div>
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
          content: this.summary,
        },
        {
          hid: "ogtitle",
          name: "og:title",
          content: this.title,
        },
        {
          hid: "ogtype",
          name: "og:type",
          content: "article",
        },
        {
          hid: "ogdescription",
          name: "og:description",
          content: this.summary,
        },
        {
          hid: "og-url",
          name: "og:url",
          content: `https://blog.writtenrealms.com${this.path}`,
        },
        {
          hid: "twitter-card",
          name: "twitter:card",
          content: "summary",
        },
        {
          hid: "twitter-site",
          name: "twitter:site",
          content: "@written_realms",
        },
        {
          hid: "twitter-title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "twitter-description",
          name: "twitter:description",
          content: this.summary,
        },
        {
          hid: "twitter-creator",
          name: "twitter:creator",
          content: "@teebesz",
        },
      ],
    };
  },
  props: ["created_ts", "title", "content", "summary", "author", "path"],
  data() {
    const raw_markdown = this.content;
    const html = new showdown.Converter().makeHtml(raw_markdown);

    // Remove title
    var h1Removed = html.replace(/<h1.*>.*?<\/h1>/gi, "");

    return {
      content_html: h1Removed,
    };
  },
  computed: {
    posted_date() {
      console.log(this.created_ts);
      return format_date(this.created_ts);
      const ts = this.post_ts;
      const posted = new Date(Date.parse(ts)).toLocaleDateString();
      return posted;
    },
  },
};
</script>

<style>
code {
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>