function solution(food) {
    let answer = '';
    let reverse = '';
    for (let i = 1; i < food.length; i++) {
        let amount = Math.floor(food[i]/2);
        if (amount) {
            for (let j = 0; j < amount; j++) {
                answer += i.toString();
                reverse = i.toString() + reverse;
            }
        }
    }
    
    return answer + '0' + reverse;
}