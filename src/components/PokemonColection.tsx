import { log } from 'console'
import React, { useState } from 'react'
import { Detail, PokemonDetail, PokemonDetailMore } from '../interface'
import PokemonList from './PokemonList'
import "./pokemon.css"
interface Props {
    pokemons : PokemonDetailMore[]
}
const PokemonColection:React.FC<Props> = (props) => {
    const {pokemons} = props
    const [viewDetail, setViewDetail] = useState<Detail>({
      id: 0,
      isOpened: false
    })
    const selectPokemon = (id:number)=>{
      if(!viewDetail.isOpened){
        setViewDetail({
          id: id,
          isOpened: true
        })
      }
    }
  return (
    <div className={viewDetail.isOpened ? 'collection-container-active' : 'collection-container'}>
        {
          viewDetail.isOpened ? (
            <div className='overlay'>

            </div>
          ):<></>
        }
        {pokemons.map((poke)=>(
            <div onClick={()=>selectPokemon(poke.id)}>
              <PokemonList
              viewDetail = {viewDetail}
              setViewDetail = {setViewDetail}
              key={poke.id}
              name = {poke.name}
              id = {poke.id}
              abilities = {poke.abilities}
              img = {poke.sprites.front_default}
              />
            </div>
        ))}
     
    </div>
  )
}

export default PokemonColection
