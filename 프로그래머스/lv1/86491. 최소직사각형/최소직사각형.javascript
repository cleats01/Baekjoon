function solution(sizes) {
    // 작은거끼리 모은 것 중에 가장 큰값 * 큰것끼리 모은 것 중 가장 큰 값
    sizes.map(arr=>{
        if (arr[0]<arr[1]) [arr[0],arr[1]] = [arr[1],arr[0]];
    })
    const width = Math.max(...sizes.map(arr=>arr[0]));
    const height = Math.max(...sizes.map(arr=>arr[1]));
    return width * height;
}