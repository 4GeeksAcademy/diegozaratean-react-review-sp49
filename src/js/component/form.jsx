import { func } from 'prop-types'
import React, { useState} from 'react'

const Form = ()=>{
    const [input1, setInput1] = useState('empty')
    const [input2, setInput2] = useState('empty 2')

    function cambioInput1(e){
        console.log('cambioInput1')
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setInput1(e.target.value)
    }

//    function cambioInput2(e){setInput2(e.target.value)}

    return(
        <>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                <input value={input1} onChange={cambioInput1} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                <input  value={input2} onChange={(e) => {setInput2(e.target.value)}} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
            </div>
        </>        
    )
}

export default Form