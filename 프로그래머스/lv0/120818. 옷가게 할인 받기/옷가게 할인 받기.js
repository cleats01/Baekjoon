function solution(price) {
    let answer = price;
    if (price < 100000) {
        return answer;
    } else if (price < 300000) {
        answer = answer * 9.5 / 10;
    } else if (price < 500000) {
        answer = answer * 9 / 10;
    } else {
        answer = answer * 8 / 10;
    }
    return parseInt(answer);
}