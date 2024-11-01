"use client"

import { useState } from 'react'

function Temperature({temp, initialUnits = 'C'}) { // default to celcius

    const [units, setUnit] = useState(initialUnits);

    // convert to Fahrenheit if units is F (or not C)
    let displayTemp = units === 'C' ? temp : (temp * 9/5) + 32

    function toogleUnits(){

        setUnit(units === "C"? "F": "C" );
    }


    return (
        <div className="flex items-center gap-4">

        <span class="Temperature">
        <strong> {parseInt(displayTemp)}&deg;{units} </strong>
        </span>
        <button onClick={toogleUnits} className="bg-green-500 rounded-lg px-2 py-3">
            Switch Unit to {units === "C"? "F": "C" }
        </button>
        </div>
    )
   }
   export default Temperature;