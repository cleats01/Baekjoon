function sumArr(arr,start,end) {
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += arr[i];
    }
    return result
}

function solution(n) {
    let answer = 0;
    const window = [];
    for (let i = 1; i <= n; i++) {
        window.push(i);
    }
    
    let start = 0;
    let end = 0;
    
    while (end <= n-1) {
        let sum = sumArr(window,start,end);
        while (sum > n) {
            start++;
            sum = sumArr(window,start,end);
        }
        if (sum === n) answer++;    
        end++;
    }
    
    return answer;
}