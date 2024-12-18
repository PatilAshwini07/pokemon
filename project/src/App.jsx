import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./pokemons.json"

function App() {
  const [data, setdata] = useState([]);
  let url="https://ashwini-2-default-rtdb.firebaseio.com/pokemons/.json"
  

  useEffect(()=>{
    function fetchdata(){
      fetch(url)
  .then((res)=>res.json())
  .then((data)=>setdata(data))
  .catch((error)=>console.log("error in fetching data",error))
    }
    fetchdata()
  },[]) 

  return (
    <>
    <label for="pokemon-select">Choose a pokemon:</label>

        <select name="pokemon" id="poke-select">
          <option value="">--Please choose an option--</option>
          <option value="bulbasaur">bulbasaur</option>
          <option value="ivysaur">ivysaur</option>
          <option value="venusaur">venusaur</option>
          <option value="charmander">charmander</option>
          <option value="charizard">charizard</option>
          <option value="squirtle">squirtle</option>
        </select>
    {
    data.map((el) => {
      if (el !==null){
        return (
          <>
          <div style={{width:"500px",border:"1px solid"}}>
          <h3>{el.name}</h3>
          <h5>{el.description}</h5>
          <img src={el.image} style = {{width:"200px"}}alt="" />
          </div>
          
             
          </>
        )
      }
      
    })
    
  }
      
    </>
  )
}

export default App
