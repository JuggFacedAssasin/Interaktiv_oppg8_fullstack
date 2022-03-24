import { getActors } from "../lib/services/movieService";

const Actors = ({ dataA, setDataA }) => {
  
  const clickA = async () => {
    const actorPack = await getActors()
    setDataA(actorPack)
  }
    
  return(
    <>
      <button type="button" onClick={clickA}>Actor</button>
      {dataA?.length > 0 ? dataA.map((actorArray)=>{
        return (
        <article key={ actorArray.fullname }>
          <h1>{ actorArray.fullname }</h1>
          <p>{ actorArray._type }</p>
          <p>{ actorArray.bio }</p>
        </article>
        )
      }) :null }
    </>
  )
}

export default Actors;