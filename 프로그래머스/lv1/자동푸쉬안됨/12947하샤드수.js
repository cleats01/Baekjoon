function solution(x) {
  return x % String(x).split('').reduce((a,c)=>(+a)+(+c)) === 0
}