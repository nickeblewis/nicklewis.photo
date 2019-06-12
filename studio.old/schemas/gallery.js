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
        title: 'Body',
        type: 'blockContent'
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
  