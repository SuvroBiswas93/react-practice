import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'
import Charts from './Components/Charts/Charts'
import axios from 'axios'
import ExBarChart from './Components/BarChart/EXBarChart'


 const fetchPriceData = async () =>{
  const response = await fetch('/priceData.json')
  return response.json()
 }

 const marksPromise = axios.get('/marksData.json')

 const fetchPromise = fetchPriceData()

function App() {

  return (
    <>
      
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-ring loading-xl items-center"></span>}>
          <PricingOptions fetchPromise={fetchPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-ring loading-xl items-center"></span>}>
          <ExBarChart marksPromise={marksPromise}></ExBarChart>
        </Suspense>

        <Charts></Charts>
        
      </main>
     
    </>
  )
}

export default App
