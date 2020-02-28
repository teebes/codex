import BlogService from "./services/BlogService.js";

export default async () => {
  const blog_routes = await BlogService.getRoutes();

  return {
    mode: "universal",
    /*
     ** Headers of the page
     */
    head: {
      title: "Codex, the Written Realms Blog",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "News, essays and fiction from the worlds of Written Realms"
        }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
        // {
        //   rel: "stylesheet",
        //   href: "https://fonts.googleapis.com/css?family=Roboto&display=swap"
        // }

        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat|Roboto+Slab"
        },
        {}
      ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: ["@/assets/scss/main.scss"],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
      // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
      "@nuxtjs/tailwindcss"
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
      // Doc: https://axios.nuxtjs.org/usage
      "@nuxtjs/axios"
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {}
    },
    router: {
      extendRoutes: (routes, resolve) => {
        for (const path in blog_routes) {
          routes.push({
            path: path,
            component: resolve(__dirname, "components/CustomRoute.vue")
          });
        }

        // routes.push({
        //   path: "*",
        //   component: resolve(__dirname, "pages/rooturls.vue")
        // });
      }
    },
    generate: {
      // routes: () => {
      //   return BlogService.getRecent().then(response => {
      //     return response.data.
      //   })
      // }
    }
  };
};
