import { use } from "react"

export default function Friends({friendsPromise}){
    const friends = use(friendsPromise)
    console.log(friends)
    return(
        <div className="box">
            <h3>Name : {friends.length} </h3>
        </div>
    )
}