import { func } from 'prop-types'
import React, { useState} from 'react'

const Frutas = ()=>{
    const [frutas, setFrutas] = useState(['platano','sandia','melon','durazno','guanabana','maracuya','guayaba'])

    const [texto, setTexto] = useState('Hola ')

    const [count, setCount] = useState(0)

    function agregar(){
        let elementos = [1,2,3,4]
        console.log(elementos)
        elementos.push(5)
        console.log(elementos)
        // console.log(frutas)
        // frutas.push('manzana')
        // console.log(frutas)
        console.log(...frutas)
        console.log('agregar')
        setFrutas([...frutas,'manzana'])

        
    }
  
    return(
        <>
            <h1 >Frutas</h1>
            {frutas}
            itearando
            {frutas.map( (fruta, index)=> <p key={index} id={index}> {fruta} </p> )}
            <button onClick={agregar}>Agregar</button>
            {count}


        </>        
    )
}

export default Frutas