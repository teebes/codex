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
}
</style>
