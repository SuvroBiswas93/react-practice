import Food from './Food';
import './App.css'

function App() {


  return (
    <>
      <h1>React Core Concept</h1>
      {/* <Food></Food>
      <Person></Person> 
      <Sports></Sports> */}
      <Food name={()=>console.log('Props Learning')}></Food>
      

      
      {/* <Student></Student>
      */}
    </>
  )
}



export default App