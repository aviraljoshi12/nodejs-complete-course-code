function digitsToNumber(digits) {
  let newDigit = 0;
  for (let i = 0; i < digits.length; i++) {
    newDigit += digits[i] * 10 ** i;
  }
  return newDigit;
}

//digits = [2,4,6,5]

console.log(digitsToNumber([2, 4, 6, 5]));
