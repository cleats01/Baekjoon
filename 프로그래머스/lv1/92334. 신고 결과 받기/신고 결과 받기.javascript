function solution(id_list, report, k) {
    // 한 사람이 다른 사람을 여러번신고 가능
    // k번 이상 신고당하면 정지
    // 그 유저를 신고한 사람들에게 메일 발송
    
    // 일단 중복 신고 제거
    report = [...new Set(report)];
    
    // 신고 당한 사람 : [신고 한사람 배열] 인 객체를 만들자
    let reported = {};
    report.forEach(el=>{
        let arr = el.split(" ");
        reported[arr[1]]===undefined 
            ? reported[arr[1]] = [arr[0]]
            : reported[arr[1]].push(arr[0]);
    });

    let mail = new Array(id_list.length);
    mail.fill(0);
    
    Object.values(reported).forEach(arr=>{
        if (arr.length >= k) {
            arr.forEach(id=>{
                mail[id_list.indexOf(id)]++;
            })
        } 
    })
    
    return mail;
}