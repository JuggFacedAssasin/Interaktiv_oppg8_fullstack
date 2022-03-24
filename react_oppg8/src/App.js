import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Actor from './components/Actor';
import Actors from './components/Actors';
import Movie from './components/Movie';
import Movies from './components/Movies';
import Navigation from './components/Navigation';

function App() {

  const [data, setData] = useState('')

  return (
    <div className="App">
      <Navigation />
      <h2>APP JESS</h2>

      <Routes>
      <Route index element={ <Movies data={ data } setData={ setData } />}></Route>
        <Route path="Movies">
          <Route index element={ <Movies />}></Route>
          <Route path=':id' element={ <Movie /> }></Route>
        </Route>
        <Route path="Actors">
          <Route index element={ <Actors />}></Route>
          <Route path=':id' element={ <Actor /> }></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
