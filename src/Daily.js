import React from 'react';
import './Daily.css';

function Daily(props){

    return (
        <div>
            <p className='daily'>Your daily goal: {props.value} / {props.min} ml; {props.percent}% achieved!</p>
        </div>
    )
};

export default Daily;