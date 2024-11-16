import { useState, useEffect, useContext } from "react";
import { Box } from '@mui/system';
import { TextField, Checkbox, Select, MenuItem, Button } from "@mui/material";
import { FormControl, FormControlLabel, InputLabel } from "@mui/material";
import { MyThemeContext } from "../context/MyThemeProvider";


const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {

  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(0);

  const {theme} = useContext(MyThemeContext);



  const options = currencies.map((curr) => (
    <MenuItem value={curr} key={curr}>
      {curr}
    </MenuItem>
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
    <div className="BitcoinRates componentBox" style={{background: theme.background, color: theme.foreground}}>
      <Box padding={'0.5em'}>
        <h3>Bitcoin Exchange Rate</h3>
        <FormControl>
          Choose currency:
          <Select value={currency} onChange={e => setCurrency(e.target.value)}>
            {options}
          </Select>
          Bitcoin to {currency} {rate} 
        </FormControl>
      </Box>
    </div>
  );
}

export default BitcoinRates;