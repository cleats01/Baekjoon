function solution(people, limit) {
    let answer = 0;
    let sorted = people.sort((a,b)=>a-b);
    
    while (sorted.length) {
        const heavy = sorted.pop();
        if (heavy + sorted[0] <= limit) {
            sorted.shift();
        }
        answer++;
    }
    
    return answer;
}