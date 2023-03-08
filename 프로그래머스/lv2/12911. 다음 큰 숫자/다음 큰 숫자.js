function solution(n) {
    let answer = 0;
    let start = n+1;
    while (answer === 0) {
        if (start.toString(2).length-start.toString(2).replace(/1/g,'').length === n.toString(2).length-n.toString(2).replace(/1/g,'').length) answer = start;
        else start++;
    }
    return answer;
}