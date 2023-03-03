function solution(X, Y) {
    // 처음 풀이 11~15 시간초과
    // const jjaks = [];
    // const Yarr = Y.split("");
    // for (let i = 0; i < X.length; i++) {
    //     const index = Yarr.indexOf(X[i])
    //     if (index >= 0) {
    //         jjaks.push(X[i]);
    //         Yarr.splice(index,1);
    //     }
    // }
    // const answer = jjaks.length ? jjaks.sort((a,b)=>b-a).join("") : "-1";
    // return answer[0]==="0" ? "0" : answer;
    
    const jjaks = [];
    const numbers = {};
    for (const num of X) {
        numbers[num] = numbers[num] ? numbers[num]+1 : 1;
    }
    for (const num of Y) {
        if (numbers[num]) {
            numbers[num]--;
            jjaks.push(num)
        }
    }
    const answer = jjaks.length ? jjaks.sort((a,b)=>b-a).join("") : "-1";
    return answer[0]==="0" ? "0" : answer;
}