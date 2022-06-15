function solution(left, right) {
    let result = 0;
    const divisor = function (n) {
        let cnt = 0;
        for (let i = 1; i<=n; i++) {
            if (n%i===0) cnt++;
        }
        return cnt;
    }
    
    for (let i = left; i <= right; i++) {
        divisor(i)%2===0 ? result+=i : result-=i;
    }
    
    return result;
}