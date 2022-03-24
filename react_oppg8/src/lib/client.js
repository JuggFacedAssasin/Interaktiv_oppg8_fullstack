import sanityClient from '@sanity/client'

const options = {
  projectId: 'so1krxjm',
  dataset: 'production',
  apiVersion: '2022-03-23',
}

const client = sanityClient( {
  ...options,
  useCdn: false,
})

export default client;