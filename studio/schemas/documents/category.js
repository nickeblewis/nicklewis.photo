// TODO: match this up with my own existing author type, just add those that aren't here
export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'parents',
      type: 'array',
      title: 'Parents',
      of: [
        {
          type: 'reference',
          to: {type: 'category'}
        }
      ]
    }
  ]
}
