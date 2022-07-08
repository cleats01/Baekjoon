let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').slice(1).map(e=>e.split(' '));
input.forEach(arr=>{
  let h = arr[2]%arr[0] === 0 ? arr[0] : arr[2]%arr[0];
  let w = Math.ceil(arr[2]/arr[0]) < 10 ? `0${Math.ceil(arr[2]/arr[0])}` : Math.ceil(arr[2]/arr[0])
  let answer = `${h}${w}`
  console.log(+answer)
});