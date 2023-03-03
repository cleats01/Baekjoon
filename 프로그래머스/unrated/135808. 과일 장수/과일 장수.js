function solution(k, m, score) {
    let answer = 0;
    const sorted = score.sort((a,b)=>b-a);
    for (let i = 0; i < sorted.length; i+=m) {
        if (sorted[i+m-1]) answer += m*sorted[i+m-1]
    }
    return answer;
}