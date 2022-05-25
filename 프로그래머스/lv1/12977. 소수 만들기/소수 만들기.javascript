function solution(nums) {
    let result = 0;
    let num = 0;
    let cnt = 0;
    function isPrime (num) {
        cnt = 0;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            num % i === 0 ? cnt++ : cnt;
        }
        cnt === 0 ? result++ : result;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++ ) {
                num = nums[i] + nums[j] + nums[k];
                isPrime(num);
            } 
        }
    }
    
    return result;
}