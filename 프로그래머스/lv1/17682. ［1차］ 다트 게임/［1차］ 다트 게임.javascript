function solution(dartResult) {
    // 0~10점 세번 합
    // #나오면 -1곱하기
    // *나오면 앞 두 숫자의 합 *2
    let result = dartResult
        .replace(/\*/gi,"@ ")
        .replace(/\#/gi,"# ")
        .replace(/S/gi," ")
        .replace(/D/gi,"**2 ")
        .replace(/T/gi,"**3 ")
        .split(" ");
    result.pop();
    
    for(let i = result.length-1; i>=0; i--) {
        if (result[i]==="#") {
            result[i-1]+="*(-1)"
            result[i]="0";
        };
        if (result[i]==="@") {
            if (result[i-2]==="@" || result[i-2]==="#") result[i-3] += "*2";
            else if (result[i-2]) result[i-2] += "*2";
            result[i-1] += "*2";
            result[i]="0";
        }
    }
    
    return eval(result.join("+"));
}