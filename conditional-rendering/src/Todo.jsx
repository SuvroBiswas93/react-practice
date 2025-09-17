// const Todo =({task,isTrue})=>{
//     return(
//         <div className="todo">
//             <li>Task:{task} </li>
//             {/* <li>Done:{isTrue} </li> */}
//         </div>
//     )
// }

// export default Todo


const Todo =({task,isDone})=>{
    if(isDone){
        return <li className="list" style={{color:'green'}}>✔ Done: {task} </li>
    }
    else{
        return <li className="list" style={{color:'red'}}>⏳Pending: {task} </li>
    }
}

export default Todo