import React from 'react'
import pokeball from '../images/pokemon-1536849_1280.png'

function ListDisplay( pokeList) {
  return (
    <div>
        <h2>Scan through the list</h2>
        <p>If you click on the name, you will see the json that describes that pokemon</p>
        <ul>
            {   
                (pokeList.results) && 
                pokeList.results.map(pokemon =>{
                    return (
                        <li>
                            <img src={pokeball} height = '20px' width='20px' alt='pokeball'/>
                            {pokemon.name}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ListDisplay