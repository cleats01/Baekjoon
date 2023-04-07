function solution(age) {
    const stringAge = 'abcdefghijklmnopqrstuvwxyz';
    return age.toString().split("").map(e=>stringAge[+e]).join("");
}