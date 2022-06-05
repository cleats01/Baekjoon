function solution(num) {
    let cnt = 0;
    function collatz(num) {
        if (num===1) return cnt;
        else if (num%2===0) num = num/2;
        else num = (num*3)+1;
        cnt++;
        return collatz(num);
    }
    collatz(num);
    return cnt>=500 ? -1 : cnt;
}