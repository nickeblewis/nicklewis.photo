import {format} from 'date-fns'

export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      title: 'Hero Image',
      name: 'heroImage',
      type: 'image'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [
        {
          type: "string"
        }
      ],
      options: {
        layout: "tags"
      }
    },
    {
      name: "vendor",
      title: "Vendor",
      type: "reference",
      to: { type: "vendor" }
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "excerptPortableText",
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" }
        }
      ]
    },
    {
      name: "body",
      title: "Body",
      type: "bodyPortableText"
    }
  ],

  preview: {
    select: {
      title: "title",
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: "heroImage"
    },
    prepare ({title = 'No title', publishedAt, slug, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Publishing date not yet set'
      }
    }
  }
};
