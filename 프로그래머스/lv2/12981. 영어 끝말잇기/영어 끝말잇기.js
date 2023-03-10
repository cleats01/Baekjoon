function solution(n, words) {
    var answer = [];
    let index = 0;
    for (let i = 1; i < words.length; i++) {
        if (words[i][0] !== words[i-1].at(-1)) {
            index = i;
            break;
        } else if (words.slice(0,i).includes(words[i])) {
            index = i;
            break;
        }
    }
    
    return index ? [((index+1)%n) || n, Math.ceil((index+1)/n)] : [0,0];
}