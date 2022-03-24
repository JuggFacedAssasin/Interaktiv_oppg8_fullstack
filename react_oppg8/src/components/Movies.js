import { getMovies } from "../lib/services/movieService";



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
            <p>{ movieArray._type }</p>
            <p>{ movieArray.actor }</p>
            <p>{ movieArray.description }</p>
          </article>
        )
      }):null}
    </>
  )
}

export default Movies;