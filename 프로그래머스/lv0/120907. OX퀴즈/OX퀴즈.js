function solution(quiz) {
    return quiz.map((e)=> eval(e.split("=")[0]) === +e.split("=")[1] ? 'O' : 'X');
}