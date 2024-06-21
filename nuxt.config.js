import svgLoader from "vite-svg-loader";
import dynamicImport from "vite-plugin-dynamic-import";
import path from "path";

export default {
  devtools: {
    enabled: true,
  },
  target: "server",
  ssr: true,
  app: {
    head: {
      meta: [
        { name: "theme-color", content: "#ffffff" },
        {
          name: "viewport",
          content:
            "width=device-width, height=device-height, maximum-scale=1.0",
        },
      ],
      link: [],
    },
  },

  runtimeConfig: {
    public: {},
  },

  css: ["~/assets/scss/main.scss", "bootstrap/dist/css/bootstrap.min.css"],

  vite: {
    resolve: {
      alias: {
        "@": path.join(__dirname, ""),
        "@assets": path.join(__dirname, "assets"),
        "@img": path.join(__dirname, "assets/img"),
        "@icons": path.join(__dirname, "assets/icons"),
        "@lib": path.join(__dirname, "lib"),
      },
    },

    plugins: [svgLoader(), dynamicImport()],
  },

  imports: {
    dirs: ["stores"],
  },

  plugins: [
    {
      src: "~/plugins/toastify.js",
      ssr: false,
    },
    {
      src: "~/plugins/init-stores-data.js",
      mode: "client",
    },
  ],

  buildModules: [],

  modules: [
    "nuxt-lodash",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  content: {},

  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
  },

  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],
};
