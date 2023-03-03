function solution(number, limit, power) {
    const yaks = [];
    
    function findYak (n) {
        if (n===1) return 1;
        let count = 0;
        for (let i = 1; i < Math.sqrt(n); i++) {
            count += (n%i === 0) ? 1 : 0;
        }
        return Number.isInteger(Math.sqrt(n)) ? count*2+1 : count*2;
    }
    
    for (let i = 1; i <= number; i++) {
        const yak = findYak(i);
        yak > limit ? yaks.push(power) : yaks.push(yak)
    }
    
    return yaks.reduce((acc,cur)=>acc+cur,0);
}