
export interface Pokemon {
    name: string;
    url: string;
  }
  
export interface PokemonDetail {
    id: number,
    name: string,
    sprites:{
      front_default : string
    }
  
  }

export interface Detail {
  id: number;
  isOpened: boolean;
}

export interface PokemonDetailMore extends PokemonDetail {
  abilities?: {
    ability: string;
    name: string;
  }[];
}