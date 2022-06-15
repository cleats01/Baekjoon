function solution(arr) {
    let result = arr.filter((el,i,arr) => el!==arr[i+1] );
    return result;
}