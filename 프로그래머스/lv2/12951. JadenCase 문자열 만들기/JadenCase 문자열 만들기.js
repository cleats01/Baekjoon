function solution(s) {
    return s.split("").map((e,i)=> {
        if (i===0) return e.toUpperCase();
        if (s[i-1]===' ') return e.toUpperCase();
        if (s[i-1]!==' ') return e.toLowerCase();
    }).join('')
}