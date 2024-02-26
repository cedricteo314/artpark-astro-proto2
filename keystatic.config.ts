import { config, fields, collection, singleton } from "@keystatic/core";
import {ComponentBlocks} from "./src/components/ComponentBlocks.tsx";


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
      path: "content/posts/*/",
      slugField: "title",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
          },
        }),
        summary: fields.text({
          label: "Summary",
          validation: { length: { min: 4 } },
        }),
        publishedDate: fields.date({ label: "Published Date" }),
        coverImage: fields.image({
          label: "Image",
          directory: "public/images/posts",
        }),
        wordCount: fields.integer({
          label: "Word count",
        }),
        authors: fields.array(
          fields.relationship({
            label: "Post author",
            collection: "authors",
          }),
          {
            label: "Authors",
            validation: { length: { min: 1 } },
            itemLabel: (props) => props.value || "Please select an author",
          }
        ),
        content: fields.document({
          formatting: true,
          dividers: true,
          links: true,
          layouts: [
            [1, 1],
            [1, 1, 1],
            [2, 1],
            [1, 2, 1],
          ],
          label: "Content",
          componentBlocks: ComponentBlocks,
        }),
      },
    }),



    authors: collection({
      label: "Authors",
      path: "content/authors/*",
      slugField: "name",
      schema: {
        name: fields.slug({
          name: {
            label: "Name",
            validation: {
              length: {
                min: 1,
              },
            },
          },
        }),
        role: fields.text({ label: "Role" }),
        avatar: fields.image({
          label: "Author avatar",
          directory: "public/images/authors",
        }),
      },
    }),
    externalArticles: collection({
      label: "External Article",
      path: "content/externalArticles/*/",
      slugField: "title",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { length: { min: 4 } },
          },
        }),
        directLink: fields.url({
          label: "Article Link",
        }),
        source: fields.text({
          label: "Link Source",
          defaultValue: "Read more.",
        }),
        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/images/external-articles",
        }),
        summary: fields.text({
          label: "Summary",
          validation: { length: { min: 4, max: 200 } },
        }),
        publishedDate: fields.date({ label: "Published Date" }),
      },
    }),
  },
});
