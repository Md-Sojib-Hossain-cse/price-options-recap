import './App.css'
import LineChart from './Components/LineChart/LineChart';
import NavBar from './Components/NavBar/NavBar';
import Phones from './Components/Phones/Phones';
import PriceOptions from './Components/PriceOptions/PriceOptions';

function App() {

  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App;