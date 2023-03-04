function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    let oneIndex = 0;
    let twoIndex = 0;
    for (const word of goal) {
        if (cards1.indexOf(word) === oneIndex) {
            oneIndex++;
            continue;
        } else if (cards2.indexOf(word) === twoIndex) {
            twoIndex++;
            continue;
        } else {
            answer = 'No'
        }
    }
    return answer;
}