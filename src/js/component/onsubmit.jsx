import React, { useState} from 'react'

const Onsubmit = ()=>{

    const [input1, setInput1] = useState('Hola ')
  
    function enviar(e){
        e.preventDefault()
        console.log('oprimio enter')
    }
    return(
        <>
            <h1 >Onsubmit</h1>
            <form onSubmit={enviar}>
                <input   type="text" onChange={(e) => {setInput1(e.target.value);}}  value={input1} />
            </form>
           

        </>        
    )
}

export default Onsubmit