"use client"

import { useState, useEffect } from "react";
import {useBitcoinRates} from "../hooks/useBitcoinRates"




const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  
  const [bitcoinRateResult, setBitcoinRates] = useBitcoinRates(currencies[0]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select onChange={(e) => setBitcoinRates(e.target.value)}>
          {options}
        </select>
         - {bitcoinRateResult.rate}
      </label>
      <div className="error">{bitcoinRateResult.error}</div>
    </div>
  );
}

export default BitcoinRates;