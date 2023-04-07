function solution(age) {
    const stringAge = 'abcdefghij';
    return age.toString().split("").map(e=>stringAge[+e]).join("");
}