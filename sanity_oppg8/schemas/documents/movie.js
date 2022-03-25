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
      type: 'slug',
      name: 'movieSlug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },{
      type: 'string',
      name: 'year',
      title: 'Release Year',
    },{
      type: 'reference',
      name: 'actor',
      title: 'Actor',
      to: {type: 'actor'}
    },{
      type: 'reference',
      name: 'actor2',
      title: 'Actor',
      to: {type: 'actor'}
    },{
      type: 'text',
      name: 'description',
      title: 'Description',
    },{
      type: "image",
      name: "poster",
      title: 'Poster',
    }
  ]
}