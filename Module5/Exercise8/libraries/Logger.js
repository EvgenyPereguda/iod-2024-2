class Logger {
  constructor() {}

  info(id, functionName, value) {
    console.info(`[Calculator :${id}]: ${functionName} => ${value}`);
  }

  error(id, functionName, value) {
    console.error(`[Calculator :${id}]: ${functionName} => ${value}`);
  }
  warning(id, functionName, value) {
    console.warning(`[Calculator :${id}]: ${functionName} => ${value}`);
  }
  debug(id, functionName, value) {
    console.debug(`[Calculator :${id}]: ${functionName} => ${value}`);
  }
}

module.exports = Logger;
