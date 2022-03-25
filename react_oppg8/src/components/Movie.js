import { useParams, Link } from "react-router-dom";

const Movie = ({ title, actorm, dataM }) => {

  const {name}=useParams()

  const movieSiteArray = dataM.find((movieSite)=>{
    return movieSite.slug === name
  })

  return(
    <article>
      <img src={movieSiteArray.poster.asset.url} alt="Movie poster missing"></img>
      <h2>{ movieSiteArray.title }</h2>
      <p>{ movieSiteArray.year }</p>
      <p>{ movieSiteArray.actor } - {movieSiteArray.actor2 }</p>
      <p>{movieSiteArray.description}</p>
      
    </article>
  )
}

export default Movie;