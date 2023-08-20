export default {
  base: "/StudyNotes/",
  title: "日常记录",
  description: "日常记录",
  themeConfig: {
    outlineTitle: "此页内容",
    nav: [
      {
        text: "前端",
        items: [
          {
            items: [
              {
                text: "css",
                link: "/css/index",
                activeMatch: "/css/",
              },
              {
                text: "node",
                link: "/node/index",
              },
            ],
          },
          // {
          //   items: [
          //     {
          //       text: "react",
          //       link: "/node/index",
          //     },
          //     {
          //       text: "node",
          //       link: "/node/index",
          //     },
          //   ],
          // },
        ],
      },
    ],

    sidebar: {
      "/css/": [
        {
          text: "css",
          collapsed: false,
          items: [
            { text: "栅格布局", link: "/css/" },
            { text: "flex布局", link: "/css/flex" },
          ],
        },
      ],
    },
    // sidebar: [
    //   {
    //     text: "css",
    //     collapsed: false,
    //     items: [
    //       { text: "grid布局", link: "/introduction" },
    //       { text: "flex布局", link: "/getting-started" },
    //     ],
    //   },
    //   {
    //     text: "css",
    //     collapsed: false,
    //     items: [
    //       { text: "grid布局", link: "/introduction" },
    //       { text: "flex布局", link: "/getting-started" },
    //     ],
    //   },
    // ],
  },
};
