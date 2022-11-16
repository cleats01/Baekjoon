function solution(box, n) {
    return box
        .map(length => parseInt(length/n))
        .reduce((acc,cur)=>acc*cur,1);
}