function solution(s){
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        if (cur==="(") stack.push(cur);
        else {
            stack.at(-1)==='(' ? stack.pop() : stack.push(cur);
        }
    }
    return stack.length===0
}