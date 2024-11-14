"use client";

import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {

  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(0);
  
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  const url_query = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;
    
  useEffect(() => {

    let ignore = false;

    fetch(url_query)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
            setRate(Object.values(json.bitcoin)[0]);
        }
      })
      .catch((error)=>{
        alert(error);
      });
      
    return () => {
      ignore = true;
    };
  }, [url_query]); 

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
        - {rate}
      </label>
    </div>
  );
}

export default BitcoinRates;
