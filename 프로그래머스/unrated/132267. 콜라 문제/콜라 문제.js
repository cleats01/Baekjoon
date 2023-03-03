function solution(a, b, n) {
    let answer = 0;
    let empty = n;
    while (Math.floor(empty/a) >= 1) {
        answer += Math.floor(empty/a)*b;
        empty = Math.floor(empty/a)*b + (empty-(Math.floor(empty/a)*a));
    }
    return answer;
}