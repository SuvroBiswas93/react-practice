import { use } from "react"
import User from "./User"

export default function Users({users}){

    const userList = use(users)
    console.log(userList)
    return(
        <div className="box">
            <h3>User : {userList.length} </h3>
            {
                userList.map(list => <User key={list.id} list={list}></User>)
            }
            
        </div>
    )
}