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
    }
  ]
}