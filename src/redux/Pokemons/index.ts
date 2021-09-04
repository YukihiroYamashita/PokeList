import { AnyAction } from 'redux';
import { ActionTypes as Types } from '../types';

const INITIAL_STATE: IPokemon = {} as IPokemon;

export interface IPokemon {
  pokemon: [
    {
      name: String;
      url: String;
    } 
  ];
}

export default (state = INITIAL_STATE, { payload, type }: AnyAction): IPokemon => {
  switch (type) {
    case Types.GET_POKEMON_LIST:
      return { pokemon: payload };
    default:
      return state;
  }
};