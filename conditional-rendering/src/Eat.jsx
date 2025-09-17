const Eat = ({food,isDone})=>{
   if(isDone){
     return <h3 style={{color:'green'}}>You ate **{food}** Very Nice But Eat Timely </h3>
   }
   return <h1 style={{color:'red'}}>Very Bad you miss (**{food}**)!! you should eat 3 meals a day, follow this from tomorrow..</h1>
}

export default Eat