import React, { Component } from 'react';
import PokemonDeck from './../pokemon-deck/PokemonDeck';
import './PokemonGame.css';

export default class PokemonGame extends Component {
   static defaultProps = {
      pokemons: [
         { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
         { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
         { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
         { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
         { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
         { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
         { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
         { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
      ]
   };
   render() {
      let hand1 = [];
      let hand2 = [...this.props.pokemons];

      /*===================================================
      randomly pick 1 item from  hand2 and place it into 
      hand1, until they are equal lengths
      ======================================================*/
      while (hand1.length < hand2.length) {
         let randomIndex = Math.floor(Math.random() * hand2.length);
         let randPokemon = hand2.splice(randomIndex, 1)[0];
         hand1.push(randPokemon);
      }

      console.log(hand1);
      console.log(hand2);
      /*======================================================
      get the total experience from each hand and put in 
      two different variables
      =========================================================*/
      let exp1 = hand1.reduce((exp, pokemons) => exp + pokemons.base_experience, 0);
      let exp2 = hand2.reduce((exp, pokemons) => exp + pokemons.base_experience, 0);

      return (
         <div className='PokemonGame'>
            <PokemonDeck pokemons={hand1} experience={exp1} isWinner={exp1 > exp2}/>
            <PokemonDeck pokemons={hand2} experience={exp2} isWinner={exp2 > exp1}/>
         </div>
      );
   };
};
