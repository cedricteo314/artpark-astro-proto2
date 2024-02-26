import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "pkellner/artpark-astro-proto2",
  },
  singletons: {

    homenextjs: singleton({
      label: "Home",
      path: "src/content/pages/homenextjs/",
      schema: {
        heading: fields.document({
          formatting: {
            inlineMarks: {
              bold: true,
            },
          },
          label: "Heading (note: text that is bolded will show up in red)",
        }),
      },
    }),

    settings: singleton({
      label: 'Settings',
      path: 'src/content/settings',
      schema: {}
    }),

    homepage: singleton({
      label: 'HomeTitle',
      path: 'src/content/pages/home',
      schema: {
        headline: fields.text({ label: 'HomeText' }),
      },
    }),

    home: singleton({
      label: "Home",
      path: "src/content/pages/home/",
      schema: {
        heading: fields.document({
          formatting: {
            inlineMarks: {
              bold: true,
            },
          },
          label: "Heading (note: text that is bolded will show up in red)",
        }),
      },
    }),
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/posts",
            publicPath: "../../assets/images/posts/",
          },
        }),
      },
    }),
  },
});
