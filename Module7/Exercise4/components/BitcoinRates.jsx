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


  useEffect(() => {
    console.log('running effect');
    let ignore = false; // flag to allow ignoring of the fetch result
    
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
    .then(response => response.json())
    .then(json => {
    // only update state if the effect is still valid
    // ie. the dependency hasn't changed since the request
    if (!ignore) {
        setRate(Object.values(json.bitcoin)[0]);
    }



    });
    
    // cleanup function - runs when unmounted or dependencies change
    return () => {
    ignore = true; // ignore now invalid fetch results
    console.log('cleanup effect');
    };
  }, [currency]);


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