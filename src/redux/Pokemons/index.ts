import { AnyAction } from 'redux';
import { ActionTypes as Types } from '../types';

const INITIAL_STATE: IPokemon = {} as IPokemon;

export interface IPokemon {
  pokemon: [
    {
      name: string;
      url: string;
    } 
  ],
  pokemonFinded: {
    name: string;
    description: string;
    color: string;
    data: {
      specie: string;
      weight: string;
      height: string;
    },
    stats: {
      hp: string;
      attack: string;
      deffense: string;
    },
    evolution: [
      {
        name: string;
        image: string;
      }
    ]
  }
}

export default (state = INITIAL_STATE, { payload, type }: AnyAction): IPokemon => {
  switch (type) {
    case Types.GET_POKEMON_LIST:
      return { ...state, pokemon: payload };
    case Types.GET_FIND_POKEMON:
      return { ...state, pokemonFinded: payload };
    default:
      return state;
  }
};