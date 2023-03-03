function solution(t, p) {
    let answer = 0;
    const splitted = t.split("");
    for (let i = 0; i < splitted.length-p.length+1; i++) {
        const part = splitted.slice(i,i+p.length).join("");
        if (+p >= +part) answer++
    }
    return answer;
}