function solution(nums) {
    let basket = [...new Set(nums)];
    return basket.length > (nums.length / 2) ? (nums.length / 2) : basket.length;
}