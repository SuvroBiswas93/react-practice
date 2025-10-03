import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UserDeatils from './Components/userDetails/UserDeatils.jsx';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children : [
      {index:true , Component:Home},
      {path:'mobiles', Component:Mobiles},
      {path:'laptops', Component:Laptops},
      {
        path :'users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:'users2',
        element:<Suspense fallback={<h3>Loading....</h3>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path:'users/:usersId',
        loader:({params})=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component:UserDeatils
      }
    ]
  },
  {
    path:"app",
    Component: App
  },
  {
    path:'/about',
    element : <div className='bg-yellow-900 p-5 text-2xl'>
      This is about page
      <div className='mt-20 bg-green-900 p-20 h-20 rounded-md'>
          
      </div>
    </div>
  },
  {
    path:'contact',
    element: <div className='bg-purple-500 p-4 text-4xl rounded-2xl font-extrabold'>This is contact Page
      <div className='mt-10 bg-green-300 p-20 rounded-md text-2xl font-extrabold text-center m-6'>
        <div className='bg-yellow-100 p-10 flex justify-center items-center rounded-xl '>
            Suvro Biswas<br />
            Dhaka, Bangladesh 
          </div> 
      </div>
    </div>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
