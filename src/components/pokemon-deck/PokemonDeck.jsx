import React, { Component } from 'react';
import PokemonCard from './../pokemon-card/PokemonCard';
import './PokemonDeck.css';

export default class PokemonDeck extends Component {

   render() {
      let title;
      if (this.props.isWinner) {
         title = <h2 className='Pokemon__winner'>Winning Hand 😊</h2>;
      } else {
         title = <h2 className='Pokemon__loser'>Losing Hand 😒</h2>;
      }
      return (
         <div className='PokemonDeck'>
            {title}
            <h4 className='PokemonDeck__score'>Total Experience: {this.props.experience}</h4>
            <div className='PokemonDeck__cards'>
               {this.props.pokemons.map(pokemon => (
                  <PokemonCard key={pokemon.id}
                     id={pokemon.id}
                     name={pokemon.name}
                     type={pokemon.type}
                     experience={pokemon.base_experience}
                  />
               ))}
            </div>
         </div>
      );
   };
};
