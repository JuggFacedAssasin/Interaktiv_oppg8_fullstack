import { getMovies } from "../lib/services/movieService";
import { Link } from 'react-router-dom'



const Movies = ({ dataM, setDataM }) => {
  
  const clickM = async () => {
    const moviePack = await getMovies()
    setDataM(moviePack)
  }
  
  return(
    <>
      <button type="button" onClick={clickM} >Movie</button>
      {dataM?.length > 0 ? dataM.map((movieArray)=>{
        return(
          <article key={ movieArray.title }>
            <h2>{ movieArray.title }</h2>
            <button><Link to={ movieArray.slug }>Movie info</Link></button>
          </article>
        )
      }):null}
    </>
  )
}

export default Movies;