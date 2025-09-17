import { useState } from "react"

export default function Counter(){
    const [ state, setState] = useState(0)

    const handleClick = ()=>{
        const increaseCount = state + 1;
        setState(increaseCount)
        
    }

    const handleResetClick = ()=>{
        setState(0)
    }
     const counterStyle ={
            border : '3px solid yellow',
            margin :'10px',
            padding : '10px',
            borderRadius : '10px'
        }
    return(
        
        <div style={counterStyle}>
            <h2>Count : {state}</h2>
            <button className="button" onClick={handleClick}>Add</button>
            <button className="button" onClick={handleResetClick}>Reset</button>
        </div>
    )
}