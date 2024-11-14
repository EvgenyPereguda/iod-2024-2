"use client"

import { useState, useEffect } from "react";


export function useBitcoinRates(initCurrency) {
  
  const [currency, setCurrency] = useState(initCurrency);
  
  const [rate, setRate] = useState(0);

  const url_query = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=' + `${currency}`;
    

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

  const setBitcoinRates = (newCurrency) => setCurrency(newCurrency);
  
  return [rate, setBitcoinRates];

}
