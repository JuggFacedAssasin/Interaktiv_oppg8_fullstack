const Movies = ({ data, setData }) => {
  
  const click = () => {
    console.log('du trykket nettopp på en knapp. Gratulerer....')
  }
  
  return(
    <>
      <p>Lord of the rings trilogy Movies</p>
      <button type="button" onClick={click} >Click</button>
    </>
  )
}

export default Movies;