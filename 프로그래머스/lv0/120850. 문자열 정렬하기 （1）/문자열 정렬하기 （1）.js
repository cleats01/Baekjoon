function solution(my_string) {
    return my_string.split("").filter(e=>!isNaN(+e)).sort((a,b)=>a-b).map(e=>+e)
}