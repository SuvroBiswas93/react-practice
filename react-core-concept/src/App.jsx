import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'
import Baller from './Baller'

function App() {

  function handleClick(){
    alert('Button 1 clicked')
  }

  const handleClick2 = () =>{
    alert('Button 2 Clicked')
  }

  const add = (num) =>{
    const sum = num + 5;
    alert(`Button 4 clicked, after add 5 total sum is ${sum}`)
  }

  return (
    <>
     
      <h1>React Core Concept</h1>

      <Baller></Baller>
      <Batsman></Batsman>
      <Counter></Counter>   
      
      {/* <button onclick ="handleClick()">CLICK ME</button> */}
      <button onClick={handleClick}>CLICK ME</button>
      <button onClick={handleClick2}>CLICK HERE</button>
      
      <button onClick={()=> alert('Button 3 clicked')}>CLICK HERE</button>
      <button onClick={() => add(7)}>CLICK HERE</button>
      
    </>
  )
}

export default App
