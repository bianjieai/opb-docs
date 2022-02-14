module.exports = {
  theme: "cosmos",
  title: "文昌链技术文档",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cloud.typography.com/6138116/7255612/css/fonts.css"
      }
    ],
  ],
  locales: {
    "/": {
      // lang: "en-US"
      lang: "cn"
    },
    // kr: {
    //   lang: "kr"
    // },
    cn: {
      lang: "cn"
    },
    // ru: {
    //   lang: "ru"
    // }
  },
  base: process.env.VUEPRESS_BASE || "/",
  themeConfig: {
    repo: "bianjieai/opb-docs",
    docsRepo: "",
    docsDir: "/",
    editLinks: false,
    label: "wenchangchain",
    algolia: {
      id: "BH4D9OD16A",
      key: "ac317234e6a42074175369b2f42e9754",
      index: "opb-docs"
    },
    sidebar: [
      {
        // title: "Using the SDK",
        // children: [
        //   {
        //     title: "Modules",
        //     directory: true,
        //     path: "/modules"
        //   }
        // ]
      },
      {
        // title: "Resources",
        // children: [
        //   {
        //     title: "Tutorials",
        //     path: "https://tutorials.cosmos.network"
        //   },
        //   {
        //     title: "SDK API Reference",
        //     path: "https://godoc.org/github.com/cosmos/cosmos-sdk"
        //   },
        //   {
        //     title: "REST API Spec",
        //     path: "https://cosmos.network/rpc/"
        //   }
        // ]
      }
    ]
    // footer: {
    //   logo: "/logo-bw.svg",
    //   textLink: {
    //     text: "IRITA 技术文档",
    //     url: "https://docs.irita.io"
    //   },
    //   smallprint:
    //     "This website is maintained by Bianjie Inc.",
    // }
  },
  plugins: [
    // [
    //   "@vuepress/google-analytics",
    //   {
    //     ga: "UA-51029217-12"
    //   }
    // ],
    // [
    //   "sitemap",
    //   {
    //     hostname: "https://docs.irita.io"
    //   }
    // ]
  ]
};
