function solution(arr) {
    function gcd (a,b) {
        while (a%b!==0) {
            [a,b]=[b,a%b]
        }
        return b;
    }
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = result*arr[i] / gcd(result,arr[i]);
    }
    return result;
}