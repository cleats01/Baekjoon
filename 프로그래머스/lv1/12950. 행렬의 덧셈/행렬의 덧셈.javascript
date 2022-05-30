function solution(arr1, arr2) {
    let result = [];
    arr1.forEach((a,i)=>{
        result.push([]);
        a.forEach((el,j)=>{
            result[i].push(el+arr2[i][j]);
        })
    })
    
    return result;
}