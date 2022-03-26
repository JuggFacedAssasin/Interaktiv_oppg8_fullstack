import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Actor from './components/Actor';
import Actors from './components/Actors';
import Movie from './components/Movie';
import Movies from './components/Movies';
import Navigation from './components/Navigation';

function App() {

  const [dataM, setDataM] = useState('')
  const [dataA, setDataA] = useState('')

  return (
  <>
    <div className='appDiv'>
      <Navigation />
      <h2>Movie / actor database</h2>

      <Routes>
        <Route index element={ <Movies dataM={ dataM } setDataM={ setDataM } />}></Route>
          <Route path="Movies">
            <Route index element={ <Movies dataM={ dataM } setDataM={ setDataM } />}></Route>
            <Route path=':name' element={ <Movie dataM={ dataM } /> }></Route>
          </Route>
        <Route path="Actors">
          <Route index element={ <Actors dataA={ dataA } setDataA={ setDataA } />}></Route>
          <Route path=':name' element={ <Actor dataA={dataA} /> }></Route>
        </Route>
      </Routes>
    </div>
    <footer className='appFooter'>
      <p>Laget av Jørgen</p>
      <p>Høgskolen i Østfold - 2022</p>
    </footer>
  </>
  );
}

export default App;
