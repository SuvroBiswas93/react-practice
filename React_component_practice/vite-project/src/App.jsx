
import './App.css'

function App() {


  return (
    <>
      <h1>React Core Concept</h1>
      {/* <Food></Food>
      <Person></Person> */}
      {/* <Sports></Sports> */}
      {/* <Food></Food> */}

      <Student></Student>
      <Student></Student>
     
    </>
  )
}

function Student(){
  return(
    <div>
        <p>Name: </p>
        <p>Dept: </p>
    </div>
  )
}

function Person (){
  const age = 29;
  const country = 'Bangladesh';
  return(
    <>
    
    <p>I am Suvro Biswas, Age is: {age} and Countey is : {country} </p>
    <Sports></Sports>
    </>
  )
}

function Sports(){
  return(
    <div>
      <h2>Sports that I Love</h2>
      <p>Cricket</p>
      <p>Badminton</p>
    </div>
  )
}

function Food(){
  return(
    <>
      <h1>Food That I love</h1>
      <ul>
        <li>Biriyani</li>
        <li>Fish</li>
      </ul>
    </>
  )
}

export default App

