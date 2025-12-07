import React, { useState } from "react";
import './generatenum.css'

const setNumber = 4;
const maxNumber = 9;
const minNumber = 0;

function PinNumberGenerator() {
    const [randNumber, setRandNumber] = useState([]);

    const genPinNumber = () => {
        const currentPinNum = [];

        for (let i = 0; i < setNumber; i++) {
            const randDigitNum = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            currentPinNum.push(randDigitNum);
        }
        setRandNumber(currentPinNum);
    };

    return (
        <div className="box-styles">
            <h2>Pin Generator</h2>

            {/* tempat untuk generate number */}
            <div className="number-display">
                {randNumber.join(' - ')}
            </div>
            
            {/* Button to generate number */}
            <button onClick={genPinNumber} className="generate-button">
                Generate Pin Number
            </button>
        </div>
    );
}

export default PinNumberGenerator;