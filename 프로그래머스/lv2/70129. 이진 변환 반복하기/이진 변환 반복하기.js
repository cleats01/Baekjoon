function solution(s) {
    const answer = [];
    let str = s;
    let count = 0;
    let deleted = 0;
    while (str !== '1') {
        const noZero = str.replace(/0/g,'');
        deleted += str.length-noZero.length;
        str = noZero.length.toString(2);
        count++;
    }
    answer.push(count,deleted)
    return answer;
}