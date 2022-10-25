function solution(array, height) {
    return array.reduce((acc,cur)=>{return cur>height ? acc+1 : acc},0)
}