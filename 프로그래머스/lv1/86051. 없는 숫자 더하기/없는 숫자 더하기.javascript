function solution(numbers) {
    let result = 0;
    for (let i = 0; i <= 9; i++) {
        numbers.includes(i) ? result : result+=i;
    }
    var answer = result;
    return answer;
}