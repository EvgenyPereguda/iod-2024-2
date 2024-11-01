"use client"

import { useState } from 'react'
import Temperature from '@/components/Temperature';
import CheckWeather from '@/components/CheckWeather';


   

export default function Weather() { // copy to Weather.jsx
    // two separate state values to store weather data
    const [weather, setWeather] = useState('sunny')
    const [tempCelcius, setTempCelcius] = useState(27)
    // handler function to update both state values at once
    const handleWeatherChange = (newWeather, newTemp) => {
    setWeather(newWeather)
    setTempCelcius(newTemp)
    }
    return (
    <div className='Weather componentBox'>
    <h2>Today's Weather</h2>
    <div>
    <strong>{weather}</strong> with a temp of
    {/* Child component to display temp -
    needs temp value as prop */}
    <Temperature temp={tempCelcius} initialUnits="C" />
    </div>
    {/* Child component to update the weather -
    needs handler function as prop */}
    <CheckWeather onWeatherChange={handleWeatherChange} />
    </div>
    )
   }