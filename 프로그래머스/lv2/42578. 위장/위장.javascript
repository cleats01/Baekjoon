function solution(clothes) {
    let map = new Map(clothes);
    let 종류들 = [];
    let temp = 0;
    [...map.values()].sort().forEach((e,i,arr)=>{
        temp +=1;
        if (e!==arr[i+1]) {
            종류들.push(temp);
            temp = 0;
        } 
    })
    return 종류들.reduce((a,c)=>a*(c+1),1)-1
}