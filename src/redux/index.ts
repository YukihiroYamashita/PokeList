import { combineReducers, createStore, Store } from 'redux';

import Pokemons, { IPokemon } from './Pokemons';

export interface IApplicationState { 
  Pokemons: IPokemon
}

const reducer = combineReducers({
  Pokemons
});

const INITIAL_STATE = {};

export const store: Store = createStore(reducer, INITIAL_STATE);