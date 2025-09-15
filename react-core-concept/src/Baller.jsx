import { useState } from "react"

 export default function Baller(){
    const [value , setValue] = useState(0)
    const [over, setOver] = useState(0)
    const [wide , setwide] = useState(0)

    const handleBallCount = ()=>{
        if(value < 5){
            setValue(value + 1)
        }
        else{
            setValue(0)
            setOver(over + 1)
        }
        
    }

    const handleWideBall = ()=>{
        setValue(value)
        
        setwide(wide + 1)

        // how can i be able to increase the count of wide ball

    }


    return(
        <div>
            <h3>Ball Count</h3>
            <h3><small>Over : {over} </small></h3>
            {
                value === 6 && <p>{over} Over is finished</p>
            }
            <h3><small>Wide Ball : {wide}</small></h3>
            <h1>Ball : {value} </h1>
            

            <button onClick={handleBallCount}>Legal Ball</button>
            <button onClick={handleWideBall}> Wide Ball</button>
           
        </div>
    )
}