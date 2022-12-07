function solution(order) {
    let answer = 0;
    order.toString().split("").forEach((s)=>{if(s==='3' || s==='6' || s==='9')answer++});
    return answer;
}