function solution(answers) {
    const supo1 = [1,2,3,4,5];
    const supo2 = [2,1,2,3,2,4,2,5];
    const supo3 = [3,3,1,1,2,2,4,4,5,5];
    let score = [0,0,0];
    answers.forEach((ans,i) => {
        ans===supo1[i%5] ? score[0]++ : 0;
        ans===supo2[i%8] ? score[1]++ : 0;
        ans===supo3[i%10] ? score[2]++ : 0;
    })
    let answer = [];
    if (score[0] >= score[1] && score[0] >= score[2]) {
        answer.push(1);
    } 
    if (score[1] >= score[0] && score[1] >= score[2]) {
        answer.push(2);
    }
    if (score[2] >= score[0] && score[2] >= score[1]) {
        answer.push(3);
    } 
    
    return answer;
}