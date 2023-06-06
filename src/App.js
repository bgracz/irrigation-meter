import './App.css';
import Buttons from './Buttons';
import Bottle from './img/water-bottle.png';

function App() {
  return (
    <div>
      <h1 className='h2o'>H<sub>2</sub>O</h1>
      <div className="App">
        <img src={Bottle} className="bottle-image" alt="bottle-top"></img>
      </div>
      <Buttons />
    </div>
  );
}

export default App;
