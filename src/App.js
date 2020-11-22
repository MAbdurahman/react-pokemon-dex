import React from 'react';
import './App.css';

import PokemonGame from './components/pokemon-game/PokemonGame';



function App() {
	return (
		<div className='App'>
      <h1 className='App__title'>Pokemon Game</h1>
      <PokemonGame />
		</div>
	);
}

export default App;
