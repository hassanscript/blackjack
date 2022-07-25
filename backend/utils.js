const generateRandomNumber = () =>
  Math.floor(Math.random() * (9999 - 1000)) + 1000;

module.exports = {
  generateRandomNumber,
};
