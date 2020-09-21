import React from 'react';
import NavBar from './Components/NavBar'
import DisplayedMovies from './Components/DisplayedMovies'
import AddMovie from './Components/AddMovie'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
          <h1 id="title">Movie App GoMyCode</h1>
        <NavBar className="nav"/>
        </header>
        <main>
        <AddMovie  />
        <DisplayedMovies/>
        </main>
    </div>
  );
}

export default App;
