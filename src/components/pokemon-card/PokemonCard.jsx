import React, { Component } from 'react';
import './PokemonCard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

export default class PokemonCard extends Component {
   render() {
      let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

      return (
         <div className='PokemonCard'>
            <h1 className='PokemonCard__title'>{this.props.name}</h1>
            <div className="PokemonCard__image">
               <img className='Pokemon__image--thumbnail' src={imgSrc} alt={this.props.name}/>
            </div>
            <div className="PokemonCard__data">
               <h2 className='PokemonCard__data--type'>Type: {this.props.type}</h2>
            </div>
            <div className="PokemonCard__data">
               <h2 className='PokemonCard__data--exp'>Exp: {this.props.experience}</h2>
            </div>
         </div>
      );
   };
};
