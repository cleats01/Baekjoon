function solution(survey, choices) {
    let answer = '';
    const scores = {};
    
    for (let i = 0; i < survey.length; i++) {
        if (choices[i]-4 > 0) {
            scores[survey[i][1]] = (scores[survey[i][1]] || 0) + choices[i]-4
        } else if (choices[i]-4 < 0) {
            scores[survey[i][0]] = (scores[survey[i][0]] || 0) + -(choices[i]-4)
        }
    }
    
    function result (a,b) {
        return ((scores[a] || 0) >= (scores[b] || 0)) ? a : b;
    }
    
    return result('R','T') + result('C','F') + result('J','M') + result('A','N');
}