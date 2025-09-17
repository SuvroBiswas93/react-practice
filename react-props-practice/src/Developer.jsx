export default function Developer(props){
    console.log(props)
    const devStyle ={
        border:'2px solid green',
        margin : '10px', 
        padding: '20px',
        borderRadius : '20px'
    }
    const name = 'Suvro Biswas'
    const isPractice = true
    return(
        <div style={devStyle}>
            <h3>Developer : {props.name} </h3>
            <h3>Technology : {props.tech} </h3>
            <h4>Name is:{name} and he is practicing react or not: {isPractice ? 'yes he is practicing' : 'no he is not practicing'} </h4>
        </div>
        
    )
}