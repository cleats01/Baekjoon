function solution(n, k) {
    let answer = (n*12000)+((k-parseInt(n/10))*2000);
    return answer;
}