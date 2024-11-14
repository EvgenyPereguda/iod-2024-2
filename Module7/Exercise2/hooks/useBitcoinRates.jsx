"use client"

import { useState, useEffect, useReducer } from "react";


export function useBitcoinRates(initCurrency) {

  const [bitcoinRateResult,  dispatch] =  useReducer(reducer, {
    loading: true,
    rate: 0,
    error: ''
  });
  
  const [currency, setCurrency] = useState(initCurrency);

  const url_query = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;
    
  useEffect(() => {

    let ignore = false;

    fetch(url_query)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          dispatch({ type: "FETCH_SUCCESS", payload: Object.values(json.bitcoin)[0] });
        }
      })
      .catch((error)=>{
        dispatch({ type: "FETCH_ERROR", payload: error.message }) 
      });
      
    return () => {
      ignore = true;
    };
  }, [url_query]); 

  const setBitcoinRates = (newCurrency) => { setCurrency(newCurrency); };
  
  return [bitcoinRateResult, setBitcoinRates];
}

function reducer (bitcoinRateResult, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
    return { loading: false, rate: action.payload, error: '' }
    case 'FETCH_ERROR':
    return { loading: false, rate: 0, error: action.payload }
    default:
    return { ...bitcoinRateResult, loading: false }
    }
   
}
