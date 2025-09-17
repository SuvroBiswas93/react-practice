export default function Food(props){

    const foodStyle = {
        color : 'green',
        border : '3px solid tomato',
        padding : '10px',
        // listStyle:'none'

    }

    const listStyle = {
        listStyle :'none',
        fontWeight :'bold',
        margin : '5px 0'
    }
    // console.log(props)
    props.name()
     const biryiani ={
        name : 'mutton-biriyani',
        name1:'chiken-biriyani',
        name2:'chicken-biriyani'
     }
    return (
        <>
            <h1 style={foodStyle}>Food That i love</h1>
        <ul style={foodStyle}>
            <li style={listStyle}>biriyani:</li>
            <li style={listStyle}>{biryiani.name}</li>       
            <li style={listStyle}>{biryiani.name1}</li>       
            <li style={listStyle}>Fish</li>
        </ul>
        </>
    )
}