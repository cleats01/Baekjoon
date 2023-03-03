function solution(s) {
    let answer = [];
    let queue = [];
    for (let i = 0; i < s.length; i++) {
        queue.includes(s[i]) 
            ? answer.push(queue.indexOf(s[i])+1)
            : answer.push(queue.indexOf(s[i]));
        queue.unshift(s[i]);
    }
    
    return answer;
}