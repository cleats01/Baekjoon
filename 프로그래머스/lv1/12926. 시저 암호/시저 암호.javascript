function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower = upper.toLowerCase();
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i]===' ') {
            result += s[i];
        } else if (upper.indexOf(s[i])!==-1) {
            result += upper[upper.indexOf(s[i])+n];
        } else {
            result += lower[lower.indexOf(s[i])+n];
        }
    }
    
    return result;
}