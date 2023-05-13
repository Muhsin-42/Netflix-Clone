import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,ActionMovies,Comedy,Romance,Horror,Documentary} from './urls'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost title='Netflix Originals' url={originals} />
        <RowPost title='Action Movies' isSmall url={ActionMovies}  />
        <RowPost title='Comedy Movies' isSmall url={Comedy}  />
        <RowPost title='Romantic Movies' isSmall url={Romance}  />
        <RowPost title='Horror Movies' isSmall url={Horror}  />
        <RowPost title='Documentaries' isSmall url={Documentary}  />
    </div>
  );
}

export default App;
