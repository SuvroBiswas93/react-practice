import { useState } from "react"

 export default function Batsman(){
     
    const [run , setRun]  = useState(0);

    const [four , setFour] = useState(0);
    const [six , setsix] = useState(0) ;

    const handleSingle = () => {
        const updatedRun =  run + 1;
        setRun(updatedRun)
    }

    const handleFour = ()=>{
        const updatedRun = run + 4;
        const updatedFour =  four + 1;
        setFour(updatedFour)
        setRun(updatedRun)
    }

    const handleSix = ()=>{
        const updatedRun = run + 6 ;
        const updatedSixes = six + 1;
        setsix(updatedSixes)
        setRun(updatedRun)
    }

    return(
        <div>
            <h3>Players Scored Run </h3>

            <h3>Four : {four}</h3>
            <h3>Six: {six}</h3>
            
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