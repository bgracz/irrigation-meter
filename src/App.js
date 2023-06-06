import './App.css';
import Buttons from './Buttons';
import Bottle from './img/water-bottle.png';
import LineChart from './Chart';

function App() {
  return (
    <div>
      <h1 className='h2o'>H<sub>2</sub>O</h1>
      <div className="App">
        <img src={Bottle} className="bottle-image" alt="bottle-top"></img>
      </div>
      <Buttons />
      <LineChart />
    </div>
  );
}

export default App;
