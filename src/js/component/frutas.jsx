import { func } from 'prop-types'
import React, { useState} from 'react'

const Frutas = ()=>{
    const [frutas, setFrutas] = useState(['platano','sandia','melon','durazno','guanabana','maracuya','guayaba'])

    const [texto, setTexto] = useState('Hola ')
  
    return(
        <>
            <h1 >Frutas</h1>
            {frutas}
            {frutas.map( (fruta, index)=> <p key={index} id={index}> {fruta} </p> )}


        </>        
    )
}

export default Frutas