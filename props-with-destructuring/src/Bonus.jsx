export default function Bonus({event,amount}){
    return(
       <div className="bonus">
            <h3>Event name : {event}</h3>
            <h3>Bonus Amount : {amount}</h3>

       </div> 
    )
}


// destructing example


/**
 * const player = {name:'me', runs: '20000'}
 * const {name,runs} = player
 * 
 * or
 * const {name,runs} = {name:'me', runs: '20000'}
 * 
 */
