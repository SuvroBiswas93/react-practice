import Counter from './Counter'
import './App.css'

function App() {
 
  const handleClick =()=>{
    alert('You Click the button 1')
  }

  const handleClick3 = (num)=>{
    const newNumber = num + 5
    alert(newNumber)
  }

  return (
    <>
      <Counter></Counter>
      <button className='button' onClick={handleClick}>Click 1</button>
      <button className='button' onClick={()=>alert('Button 2 Clicked')}>Click 2</button>
      <button className='button' onClick={()=>handleClick3(10)}>Click 3</button>
    </>
  )
}

export default App
