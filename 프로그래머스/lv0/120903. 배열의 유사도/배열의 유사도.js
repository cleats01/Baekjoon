function solution(s1, s2) {
    return s1.reduce((acc,cur)=>{
        if (s2.includes(cur)) acc++;
        return acc++;
    },0)
}