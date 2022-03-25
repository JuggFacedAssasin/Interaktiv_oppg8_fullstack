import { getActors } from "../lib/services/movieService";
import { Link } from 'react-router-dom';
import { useEffect } from "react";

const Actors = ({ dataA, setDataA }) => {
  
  const clickA = async () => {
    const actorPack = await getActors()
    setDataA(actorPack)
  }

 useEffect(()=>{
  clickA()
 }, []) 

  return(
    <>
      <button type="button" onClick={clickA}>Actor</button>
      {dataA?.length > 0 ? dataA.map((actorArray)=>{
        return (
        <article key={ actorArray.fullname }>
          <h1>{ actorArray.fullname }</h1>
          <button><Link to={ actorArray.slug } >Actor bio</Link></button>
        </article>
        )
      }) :null }
    </>
  )
}

export default Actors;