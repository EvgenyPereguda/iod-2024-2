const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

function PrintOut(arg) {
  for (let key in arg) {
    console.log(`${key}: ${arg[key]}`);
  }
}

PrintOut(sydney);

const Brisbane = {
    Name: "Brisbane",
    Population: 5_121_000,
    NameOfState: "QLD",
  };

  PrintOut(Brisbane);