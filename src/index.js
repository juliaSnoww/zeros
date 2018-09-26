module.exports = function getZerosCount(number) {
  const count = 5;
  let sum = 0;
  while(number /count !== 0){
      number = number/count |0;
      sum += number;
  }
  return sum;
};
