export type RootStackParamList = {
  Home: undefined;
  Detail: {
    pokemonId: string;
    name: string;
    characteriscic: string;
    specie: string;
    hp: number;
    attack: number;
    defense: number;
  };
};
