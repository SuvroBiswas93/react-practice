
import { Suspense } from 'react'
import './App.css'
import Users from './Users'

const fetchUserName = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data  = await(res.json())
  return data
}


function App() {
  
  const users = fetchUserName()

  return (
    <>
      
      <Suspense fallback={<h3>Data Loading...</h3>}>

      <Users users={users}></Users>

      </Suspense>
    </>
  )
}

export default App
