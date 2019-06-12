// TODO - Copy content from CF to here and then get rid of the fields that aren't needed
export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
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
        title: 'Tags',
        name: 'tags',
        type: 'array',
        of: [
          {
            type: 'string'
          }
        ],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'blurb',
        title: 'Blurb',
        type: 'string'
      },
      {
        name: 'excerpt',
        type: 'excerptPortableText',
        title: 'Excerpt',
        description:
          'This ends up on summary pages, on Google, when people share your post in social media.'
      },
      {
        name: 'authors',
        title: 'Authors',
        type: 'array',
        of: [
          {
            type: 'authorReference'
          }
        ]
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {type: 'category'}
          }
        ]
      },
      {
        name: 'body',
        type: 'bodyPortableText',
        title: 'Body'
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        manufactor: 'manufactor.title',
        media: 'heroImage'
      }
    }
  }
  