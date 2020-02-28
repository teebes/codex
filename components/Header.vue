<template>
  <div id="header" class="flex justify-between">

    <div id="site-title" class="flex flex-col justify-center items-center ml-6 md:ml-12">
      <div class='font-title'><nuxt-link :to="'/'">CODEX</nuxt-link></div>
      <div class='font-text-light'>The <a href='https://writtenrealms.com'>Written Realms</a> Blog</div>
    </div>

    <!-- <div id="menu" class="flex items-center mr-6 md:mr-12">Archive</div> -->
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/colors";

#header {
  background: $color-background-header;
  height: 80px;

  #site-title {
    font-size: 16px;

    .font-title {
      font-size: 24px;
    }
    #menu {
      color: $color-text-hex-50;
    }

    a:hover {
      text-decoration: none;
    }
  }
}
</style>
