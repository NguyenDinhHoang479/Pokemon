// import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./App.css";
import PokemonColection from './components/PokemonColection';
import { Pokemon, PokemonDetail } from './interface';



const App:React.FC = ()=> {
  const [pokemon, setPokemon] = useState<PokemonDetail[]>([])
  const [nextUrl, setNextUrl] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(()=>{
    setLoading(true)
    const getPokemon = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=5")
      setNextUrl(response.data.next)
      response.data.results.forEach(async (pokemon:Pokemon)=>{
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemon((p)=>[...p, poke.data])
        setLoading(false)
      })
    };
    getPokemon()
  },[])
  const handleNext = ()=>{
    setLoading(true)
    const fetchNextApi = async () => {
      const res = await axios.get(nextUrl)
      setNextUrl(res.data.next)
      res.data.results.map(async (pokemon:Pokemon)=>{
        const poke = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setPokemon((pokemon)=>[...pokemon, poke.data])
        setLoading(false)
    })
    }
    fetchNextApi()
  }
  return (
    <div className="App">
      <div className='container'>
        <header className='pokemon-header'>Pokemon</header>
        <PokemonColection pokemons = {pokemon}></PokemonColection>
        <div className='btn' onClick={handleNext}>
          <button>{loading ? "loading...":"load more"}</button>
        </div>
      </div>
    </div>
  );
}
//test push git hub
export default App;
