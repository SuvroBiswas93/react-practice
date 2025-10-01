import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

 const fetchPriceData = async () =>{
  const response = await fetch('/priceData.json')
  return response.json()
 }

 const fetchPromise = fetchPriceData()

function App() {

  return (
    <>
      
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
          <PricingOptions fetchPromise={fetchPromise}></PricingOptions>
        </Suspense>
      </main>
     
    </>
  )
}

export default App
