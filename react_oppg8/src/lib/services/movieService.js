import client from '../client.js';

const movieFields = `
title,
_type,
"actor": actor->name.current,
description,`

const actorFields = `
_type,
fullname,
bio,`

export async function getMovies(){
  const dataM = await client.fetch( `*[_type == "movie"]{${movieFields}}`)
  return dataM
}

export async function getActors(){
  const dataA = await client.fetch( `*[_type == "actor"]{${actorFields}}`)
  return dataA
}