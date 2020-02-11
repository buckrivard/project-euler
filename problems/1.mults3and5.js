/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function isMultipleof3or5(number) {
  return number % 3 === 0 || number % 5 === 0;
}

function sumMultiplesOf3and5() {
  const oneToThousand = [...Array(1000)].map((_, i) => i);
  return oneToThousand.reduce((acc, number) => {
    if (isMultipleof3or5(number)) return acc += number;
    return acc;
  }, 0);
}
sumMultiplesOf3and5() // 233168
