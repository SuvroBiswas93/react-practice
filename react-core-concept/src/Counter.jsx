import { useState } from "react"

 export default function Counter(){

    const [count , setCount]= useState(0)

    const handleAdd  = () =>{
        const newCount = count + 1
        setCount(newCount)
    }

    const counterStyle ={
        border : '2px solid salmon',
        marginBottom: '10px'
    }
    const buttonStyle = {
        marginBottom : '4px',
        backgroundColor: "salmon"
    }

    return(
        <div style={counterStyle}>
           <p>Count : {count}</p>
           <button onClick={handleAdd} style={buttonStyle}>ADD</button>
        </div>
    )
 }