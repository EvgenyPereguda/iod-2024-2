function randomDelay() {
  const promise = new Promise((resolve, reject) => {
    // resolve/reject are callback functions

    let delay = Math.ceil(Math.random() * 19000) + 1000;

    console.log(delay);

    if (Math.ceil(delay / 2) * 2 == delay)
      setTimeout(() => resolve(), delay); // success
    else reject(); // failure
  });

  return promise;
}

randomDelay()
  .then(() => console.log("There appears to have been a delay."))
  .catch(() =>
    console.log("Random delay is odd and this a failure and reject.")
  );
