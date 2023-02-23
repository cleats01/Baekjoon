function solution(numbers) {
    const sorted = numbers.sort((a,b)=>a-b)
    let answer = sorted.at(-1) * sorted.at(-2);
    if (sorted[0] < 0 && sorted[1] < 0) {
        answer = sorted[0] * sorted[1] > answer 
            ? sorted[0] * sorted[1] 
            : answer;
    }
    return answer;
}