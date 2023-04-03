<template>
  <div>
    <Header />
    <nuxt id="contents" class="mt-4 md:mt-32 m-auto"/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
  components: {
    Header
  },
  head: {
    titleTemplate: "%s - The Written Realms Blog"
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/colors.scss";
@import "@/assets/scss/fonts.scss";

html {
  // font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
  // Roboto, "Helvetica Neue", Arial, sans-serif;
  // font-family: $font-text, serif;
  @include font-text-light;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: $color-text;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: $color-background;
  color: $color-text;
}

#contents {
  max-width: 850px;
  padding: 0 25px;

  margin-top: 1rem;
}

@media screen and (min-width: 768px) {
  #contents {
    margin-top: 8rem;
  }
}

#contents {
  margin-left: auto;                                                                                                          
  margin-right: auto;                                                                                                         
}  

h1 {
  color: $color-text-hex-80;
  font-family: $font-title;
  font-size: 2rem;
  font-weight: bold;
}

h2 {
  color: $color-secondary;
}

h3 {
  color: $color-text-hex-70;
  @include font-title;
  // text-transform: uppercase;
  // font-weight: bold;
  text-decoration: underline;
}

a {
  color: $color-text;
  text-decoration: none;
}

a:hover {
  color: $color-primary;
  text-decoration: underline;
}

strong {
  font-weight: bold;
}

em {
  font-style: italic;
}

// Markdown formatting
.markdown-post {
  @include font-text-light;

  a {
    color: $color-primary;
  }

  .summary {
    color: $color-text-hex-50;
  }

  .author-and-posted {
    color: $color-text-hex-50;
    .author {
      color: $color-text-hex-30;
      .author-name {
        color: $color-text-hex-50;
      }
    }
  }

  h2 {
    margin: 2rem 0 1rem 0;
    font-size: 1.4rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.8rem;
  }

  ul {
    list-style: disc outside none;
    margin-bottom: 1rem;

    li {
      margin-left: 1.5rem;
    }
  }

  code {
    font-size: 1rem;
    background: #333;
    border: 1px solid black;
    border-radius: 2px;
    padding: 3px;
  }

  pre {
    background: #333;
    border: 1px solid black;
    border-radius: 2px;
    padding: 5px 15px;
    margin-bottom: 1rem;

    code {
      background: none;
      border: 0;
    }
  }
}
</style>
