function solution(k, score) {
    let answer = [];
    for (let i = 0; i < score.length; i++) {
        if (i<k) {
            answer.push(Math.min(...score.slice(0,i+1)))
        } else {
            answer.push(score.slice(0,i+1).sort((a,b)=>b-a)[k-1]);
        }
    }
    return answer;
}