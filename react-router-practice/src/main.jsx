import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <div className='text-2xl font-bold mt-40 text-blue-700 animate-bounce'>Hello from React router</div>,
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
