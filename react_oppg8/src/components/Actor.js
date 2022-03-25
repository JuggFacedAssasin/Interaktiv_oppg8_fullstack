import { useParams, Link } from "react-router-dom";

const Actor = ({ dataA }) => {
  
  const {name}=useParams()
  
  const actorBioArray = dataA.find((actorBio)=>{
    return actorBio.slug === name
  })

  return(
    <article>
      <img src={actorBioArray.portrait.asset.url} alt="missing portrait"></img>
      <h2>{actorBioArray.fullname}</h2>
      <p>{actorBioArray._type}</p>
      <p>Apeared in: {actorBioArray.movierole}, {actorBioArray.movierole2}, {actorBioArray.movierole3}</p>
      <p>{actorBioArray.bio}</p>
      <button><Link to="/Actors">tilbake</Link></button>
    </article>
  )
}

export default Actor;