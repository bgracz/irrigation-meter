import React, { useState, useEffect } from 'react';
import './Buttons.css';
import Daily from './Daily';

function Buttons() {
    const [currentDrink, setCurrentDrink] = useState(210);
    const [dailyTotal, setDailyTotal] = useState(0);

    let minimumDaily = "3000";
    let todayIs = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate();

    useEffect(() => {
        const storedTotal = localStorage.getItem(todayIs);
        if (storedTotal === null || storedTotal === "false") {
          localStorage.setItem(todayIs, "0");
        } else {
          setDailyTotal(parseInt(storedTotal));
          console.log(dailyTotal);
        }
      }, [dailyTotal]);

    function minus() {
        setCurrentDrink(currentDrink - 5);
    };

    function plus() {
        setCurrentDrink(currentDrink + 5);
    };

    function addDaily() {
        setDailyTotal(dailyTotal + currentDrink);
        localStorage.setItem(todayIs, dailyTotal + currentDrink);
        console.log(todayIs, dailyTotal + currentDrink);
    };

    return (
        <div className="menu">
            <button onClick={minus}>-</button>
            <input value={currentDrink} onChange={(e) => {setCurrentDrink(e.target.currentDrink)}}></input>
            <button onClick={plus}>+</button>
            <button onClick={addDaily} className="apply-button">apply</button>
            <Daily value={dailyTotal} min={minimumDaily} percent={Math.round(dailyTotal/minimumDaily*100)}/>
        </div>
    );
}

export default Buttons;
