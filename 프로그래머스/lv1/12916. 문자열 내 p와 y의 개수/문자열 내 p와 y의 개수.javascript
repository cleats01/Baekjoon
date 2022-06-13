function solution(s){
    s = s.toLowerCase().split("");
    let p = 0, y = 0;
    s.forEach(el=>{
        if (el==='p') p++;
        if (el==='y') y++;
    })
    return p === y ? true : false;
}