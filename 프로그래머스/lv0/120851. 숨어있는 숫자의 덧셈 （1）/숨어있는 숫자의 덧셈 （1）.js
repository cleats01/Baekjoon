function solution(my_string) {
    return my_string.split("").filter(e=>!isNaN(+e)).reduce((acc,cur)=>acc+(+cur),0);
}