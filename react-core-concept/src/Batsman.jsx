import { useState } from "react"

 export default function Batsman(){
     
    const [run , setRun]  = useState(0);

    const handleSingle = () => {
        const updatedRun =  run + 1;
        setRun(updatedRun)
    }

    const handleFour = ()=>{
        const updatedRun = run + 4;
        setRun(updatedRun)
    }

    const handleSix = ()=>{
        const updatedRun = run + 6 ;
        setRun(updatedRun)
    }

    return(
        <div>
            <h3>Players Scored Run </h3>
            
            {
                run >= 50 &&  <p>Congratulations!! 🎉✨🎉 Your Score : 50 ✨🎉 </p>
            }
            {
                run >=100 && <p>Congratulations!! 🎉✨🎉 You Make a Century!!!! 🎈🎈🎇 </p>
            }

            <h1>Score : {run} </h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>

        </div>
    )
}