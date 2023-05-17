import './Buttons.css';

function Minus() {
    document.getElementsByClassName("ml").value = "300";
}

function Buttons() {
    return (
        <div className="menu">
        <button onClick={Minus}>-</button>
        <input className="ml" type="number" value="210"></input>
        <button>+</button>
        <button className="apply-button">apply</button>
        </div>
    );
  }
  
  export default Buttons;
