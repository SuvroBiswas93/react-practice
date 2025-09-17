
import './App.css'
import Bonus from './Bonus'
import Player from './Player'

function App() {
 

  return (
    <>
      <Player name='Tamim Iqbal' runs='9000'></Player>
      <Player name='Mushfiqur Rahim' runs='10000'></Player>
      <Player name='Sakib Al Hasan' runs='9500'></Player>
      <Bonus event='Eid' amount='25000'></Bonus>
      <Bonus event='Puja' amount='24000'></Bonus>
    </>
  )
}

export default App
