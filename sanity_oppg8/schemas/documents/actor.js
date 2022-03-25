export default {
  type: 'document',
  name: 'actor',
  title: 'Actor',
  fields: [
    {
      type: 'string',
      name: 'fullname',
      Title: 'Full name',
    },{
      type: 'slug',
      name: 'name',
      title: 'slug',
      options: {
        source: 'fullname',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },{
      type: 'text',
      name: 'bio',
      title: 'Bio',
    },{
      type: 'image',
      name: 'portrait',
      title: 'Portrait',
    },{
      type: 'reference',
      name: 'movierole',
      title: 'Movie role',
      to: {type: 'movie'}
    },{
      type: 'reference',
      name: 'movierole2',
      title: 'Movie role',
      to: {type: 'movie'}
    },{
      type: 'reference',
      name: 'movierole3',
      title: 'Movie role',
      to: {type: 'movie'}
    },
  ]
}