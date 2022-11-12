function solution(numbers) {
    const sort = numbers.sort((a,b)=>b-a);
    return sort[0]*sort[1];
}