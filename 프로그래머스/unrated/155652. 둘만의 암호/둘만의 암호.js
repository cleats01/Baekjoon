function solution(s, skip, index) {
    let answer = '';
    const skipArr = skip.split("")
    const skipped = 'abcdefghijklmnopqrstuvwxyz'.split("").filter(e=>!skipArr.includes(e));
    s.split("").forEach(e=>{
        let idx = skipped.indexOf(e) + index;
        if (idx > skipped.length-1) idx = (idx)%(skipped.length)
        answer+=skipped[idx]
    })
    return answer;
}