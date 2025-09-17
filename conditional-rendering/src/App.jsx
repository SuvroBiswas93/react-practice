import Todo from './Todo'
import Eat from './Eat'
import './App.css'

function App() {
  

  return (
    <>
      <Todo task='Learn React'isDone={true}></Todo>
      <Todo task='Revise JS'isDone={false}></Todo>
      <Todo task='Learn Mui'isDone={false}></Todo>
      <Todo task='Learn Props'isDone={true}></Todo>

     <Eat food='Breakfast' isDone={false}></Eat>
     <Eat food='Lunch' isDone={true}></Eat>
     <Eat food='Dinner' isDone={true}></Eat>

    </>
  )
}

export default App
