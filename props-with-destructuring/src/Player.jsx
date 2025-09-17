

export default function Player({name,runs}){
    return(
        <div className='player'>
            <h3>Name : {name}</h3>
            <h3>Runs : {runs}</h3>
        </div>
    )
}