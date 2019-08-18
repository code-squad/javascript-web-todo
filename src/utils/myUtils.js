export const makeDelay = timeInMs => {
  return new Promise(res => setTimeout(res, timeInMs));
};
