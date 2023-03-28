function solution(my_string) {
    const arr = my_string.split("");

    return arr.map((s)=>{
        const result = s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase();
        return result;
    }).join("");
}