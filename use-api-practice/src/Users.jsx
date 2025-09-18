import { use } from "react"

export default function Users({fetchUsers}){

    const user = use(fetchUsers)

    console.log(fetchUsers)


    return(
        <div className="box">
            <h3>Users : {user.length}</h3>
        </div>
    )
}