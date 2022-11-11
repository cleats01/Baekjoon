function solution(n) {
    // Math.isInteger() 메서드가 있다.
    return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? 1 : 2;
}