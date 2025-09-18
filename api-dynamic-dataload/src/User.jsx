export default function User({list}){

  const {id,name,username,email} = list

    return(
        <div className="box">
            <h4>Name : {name}</h4>
            <h4>Id : {id}</h4>
            <h4>User Name : {username}</h4>
            <h4>email : {email}</h4>
        </div>
    )
}