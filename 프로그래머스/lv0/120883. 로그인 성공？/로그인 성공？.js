function solution(id_pw, db) {
    let answer = 'fail'
    db.forEach((user)=>{
        if (user[0]===id_pw[0] && user[1]===id_pw[1]) {
            answer = 'login'
        } else if (user[0]===id_pw[0]) {
            answer = 'wrong pw'
        }
    })
    return answer
}