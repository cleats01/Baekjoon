function solution(hp) {
    let answer = 0;
    let nowHp = hp;
    while (nowHp >= 5) {
        nowHp -= 5;
        answer ++;
    }
    while (nowHp >= 3) {
        nowHp -= 3;
        answer ++;
    }
    while (nowHp >= 1) {
        nowHp -= 1;
        answer ++;
    }
    return answer;
}