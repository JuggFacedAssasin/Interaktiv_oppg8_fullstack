import { Routes, NavLink } from "react-router-dom";
import Actors from "./Actors";
import Movies from "./Movies";

const Navigation = () => {
  return(
    <nav>
      <ul>
        <li ><NavLink to='/Movies' >Movies</NavLink></li>
        <li><NavLink to='/Actors' >Actors</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation;