"use client"

import { useState, useEffect } from "react";
import {useBitcoinRates} from "../hooks/useBitcoinRates"
import EmojiChanger from './EmojiComponent'
import { useEmojiContext } from "../context/EmojiProvider";




const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {

  const { currentEmoji } = useEmojiContext();
  
  const [rate, setBitcoinRates] = useBitcoinRates(currencies[0]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <EmojiChanger/>
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select onChange={(e) => setBitcoinRates(e.target.value)}>
          {options}
        </select>
         - {rate} {currentEmoji}
      </label>
    </div>
  );
}

export default BitcoinRates;