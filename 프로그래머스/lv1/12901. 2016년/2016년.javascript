function solution(a, b) {
    let count = 0;
    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    for (let i = 0; i < a-1; i++) count += month[i];
    var answer = day[(count+b+4)%7];
    return answer;
}