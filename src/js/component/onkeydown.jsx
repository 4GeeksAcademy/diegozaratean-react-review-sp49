import React, { useState} from 'react'

const Onkeydown = ()=>{

    const [input1, setInput1] = useState('Hola ')

    function keypress(e){
        console.log('keypress')
        console.log(e.key)
        console.log(e.keyCode)
        if(e.keyCode == 13){
            console.log('oprimio enter')
        }
        

    }
  
    return(
        <>
            <h1 >Onkeydown</h1>
            <input onKeyDown={keypress}  type="text" onChange={(e) => {setInput1(e.target.value);}}  value={input1} />


        </>        
    )
}

export default Onkeydown