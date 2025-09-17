
import './App.css'
import Tasktodo from './Tasktodo'

function App() {
  // variable as props
  const time = 50;
  return (
    <>
      <Tasktodo task='Learn Html'isDone={true} time={time} ></Tasktodo>
      <Tasktodo task='Learn css'isDone={true} time={time} ></Tasktodo>
      <Tasktodo task='tailwind'isDone={true} ></Tasktodo>
      <Tasktodo task='Learn js'isDone={true} ></Tasktodo>
      <Tasktodo task='Learn React'isDone={false}time='80' ></Tasktodo>
      <Tasktodo task='Learn Nextjs'isDone={false}time='80' ></Tasktodo>
      <Tasktodo task='Mui'isDone={false}time={time}></Tasktodo>
      <Tasktodo task='nodejs'isDone={false} ></Tasktodo>
    </>
  )
}

export default App
