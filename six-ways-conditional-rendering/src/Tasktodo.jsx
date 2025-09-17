// Conditional rendering first way

// export default function Tasktodo({ task, isDone, time=0}){
//     if(isDone === true){
//       return  <li style={{listStyle:'none'}}>Done : {task}--- Duration: {time}</li>
//     }
//     else{
//        return  <li>Not Done : {task}--- Duration: {time}</li>
//     }  
    
// }

// conditional rendering 2nd way

// export default function Tasktodo({ task, isDone, time=0}){
//     if(isDone){
//       return  <li style={{listStyle:'none'}}>Done : {task}--- Duration: {time}</li>
//     }
//     return  <li>Not Done : {task}--- Duration: {time}</li>
// }


// conditional rendering 3rd way using ternary
// condition ? true : false

// export default function Tasktodo({task , isDone , time=0 }){
//     return isDone ? 
//     <li style={{listStyle:'none'}}>Done : {task} ---  Duration : {time}</li> 
//     : <li>Not Done : {task}--- Duration: {time}</li>
// }


// Fourth way using && operator

// export default function Tasktodo({task , isDone , time=0 }){
//     return isDone && <li style={{listStyle:'none'}}>Done:{task} ---- Duration:{time}</li>
// }


// Fifth way using || operator


// export default function Tasktodo({task , isDone , time=0 }){
//     return isDone || <li style={{listStyle:'none'}}>Not Done:{task} ---- Duration:{time}</li>
// }


// Anoteher way 


// export default function Tasktodo({ task, isDone, time=0}){
//     if(isDone === true){
//       return  null
//     }
//     else{
//        return  <li>Not Done : {task}--- Duration: {time}</li>
//     }  
    
// }


//  Sixth way Using variable


export default function Tasktodo({ task, isDone, time=0}){

    let listItem;
    if(isDone){
        listItem = <li style={{listStyle:'none'}}>Done : {task}--- Duration: {time ? 'It is Done' : 'Not Done Yet' }</li>
    }
    else{
        listItem = <li>Not Done : {task}--- Duration: {time}</li>
    }
     return listItem
    
}
