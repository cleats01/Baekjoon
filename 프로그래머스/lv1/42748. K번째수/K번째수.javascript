function solution(array, commands) {
    
    let result = [];
    
    function solve(arr) {
        result.push(array.slice(arr[0]-1,arr[1]).sort((a, b) => a - b)[arr[2]-1]);
    }
    commands.forEach(solve);
    
    var answer = result;
    return answer;
}