import client from '../client.js';

const movieFields = `
title,
_type,
"actor": actor->name.current,
"actor2": actor2->name.current,
description,
"slug": movieSlug.current,
"poster":poster{asset->{url}},
year,`

const actorFields = `
_type,
fullname,
bio,  
"slug": name.current,
"portrait":portrait{asset->{url}},
"movierole": movierole->movieSlug.current,
"movierole2": movierole2->movieSlug.current,
"movierole3": movierole3->movieSlug.current,`

export async function getMovies(){
  const dataM = await client.fetch( `*[_type == "movie"]{${movieFields}}`)
  console.log(dataM)
  return dataM
}

export async function getActors(){
  const dataA = await client.fetch( `*[_type == "actor"]{${actorFields}}`)
  console.log(dataA)
  return dataA
}