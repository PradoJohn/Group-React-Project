import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    const getPokemon = async() => {
      let response = await axios.get("https://pokeapi.co/api/v2/type/8")
      console.log(response.data.pokemon)
      setPokemon(response.data.pokemon)
    }
    getPokemon()

  }, [])

  useEffect(()=>{
    console.log('useEffect', pokemon)
  }, [pokemon])


  return (
    <>
     <h1>Fire types</h1>
     <ol>
      {pokemon.map((poke, idx)=>(
        <li key={idx}>
          {poke.pokemon.name}
        </li>
      ))}
     </ol>
    </>
  )
}

export default App
