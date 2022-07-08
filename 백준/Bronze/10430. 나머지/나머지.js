let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

const ans1 = (input[0]+input[1])%input[2];
const ans2 = ((input[0]%input[2])+(input[1]%input[2]))%input[2];
const ans3 = (input[0]*input[1])%input[2];
const ans4 = ((input[0]%input[2])*(input[1]%input[2]))%input[2];

console.log(ans1);
console.log(ans2);
console.log(ans3);
console.log(ans4);