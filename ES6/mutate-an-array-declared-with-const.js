const s = [5, 7, 2];
function editInPlace() {
  'use strict';

  // ez solution
  // s[0] = 2;
  // s[1] = 5;
  // s[2] = 7;

  // fun solution
  let a = s.pop();
  s.unshift(a);
  console.log(s);

}
editInPlace();
