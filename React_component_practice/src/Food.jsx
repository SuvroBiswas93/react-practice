export default function Food(props){
    // console.log(props)
    props.name()
    return (
        <>
            <h1>Food That i love</h1>
        <ul style={{ listStyleType: "none" }}>
            <li style={{fontWeight : 'bold'}}>biriyani</li>
            <li>Fish</li>
        </ul>
        </>
    )
}