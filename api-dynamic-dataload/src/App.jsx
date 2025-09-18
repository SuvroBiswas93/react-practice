
import { Suspense } from 'react'
import './App.css'
import Users from './Users'
import Posts from './Posts'

// const fetchUserName = async()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data  = await(res.json())
//   return data
// }

const fetchPosts = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}


function App() {
  
  // const users = fetchUserName()

  const postsPromise = fetchPosts()

  return (
    <>
      
      {/* <Suspense fallback={<h3>Data Loading...</h3>}>

      <Users users={users}></Users>

      </Suspense> */}

      <Suspense fallback={<h3>Posts are Loading...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
    </>
  )
}

export default App
