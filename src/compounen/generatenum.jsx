import React, { useState } from "react";
import './generatenum.css'

function NumberGenerator() {
    const [randNumber, setRandNumber] = useState(null);

    const genNumber = () => {
        const number = Math.floor(Math.random() * 10) + 1;
        setRandNumber(number);
    }

    return (
        <div className="box-styles">
            <h2>Generator Angka 1 - 10 </h2>

            {/* tempat untuk generate number */}
            <div className="number-display">
                {randNumber === null ? 'Klik untuk Generate angka' : randNumber}
            </div>
            
            {/* Button to generate number */}
            <button onClick={genNumber} className="generate-button">
                Generate Number 1 - 10
            </button>
        </div>
    );
}

export default NumberGenerator;