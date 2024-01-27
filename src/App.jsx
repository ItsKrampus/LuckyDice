import './App.css'
import LuckyN from './luckyN'
function App() {

  return (
    <>
      <LuckyN />
      <LuckyN numDice={3} goal={11} color={'green'} />
    </>
  )
}

export default App
