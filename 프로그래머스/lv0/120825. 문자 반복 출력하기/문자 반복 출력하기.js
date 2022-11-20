function solution(my_string, n) {
    return my_string.split("").map(e=>{
        let iter = '';
        for (let i = 0; i < n; i++) {
            iter += e
        }
        return iter;
    }).join("");
}