// method 1
// const sum = (...args) => args.reduce((a, b) => a + b, 0);

// method 2
function sum(...args) {
  let answer = args.reduce((a, b) => a + b, 0);
  return answer;
}

console.log(sum(1, 2, 3));