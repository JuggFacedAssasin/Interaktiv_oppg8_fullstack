export default {
  name: 'movie',
  type: 'document',
  title: 'Movie',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    }, {
      type: 'reference',
      name: 'actor',
      title: 'Actor',
      to: {type: 'actor'}
    },{
      type: 'text',
      name: 'description',
      title: 'Description',
    }
  ]
}