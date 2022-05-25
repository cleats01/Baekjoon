function solution(numbers, hand) {
    let result = '';
    const leftBtn = [1,4,7,'*'];
    const midBtn = [2,5,8,0];
    const rightBtn = [3,6,9,'#'];
    let nowLeft = 1;
    let nowRight = 1;
    let leftThumb = 3;
    let rightThumb = 3;
    
    
    function press(num) {
        if (leftBtn.includes(num)) {
            result += 'L';
            leftThumb = leftBtn.indexOf(num);
            nowLeft = 1;
        } else if (rightBtn.includes(num)) {
            result += 'R';
            rightThumb = rightBtn.indexOf(num);
            nowRight = 1;
        } else {
            if (Math.abs(midBtn.indexOf(num)-leftThumb)+nowLeft < Math.abs(midBtn.indexOf(num)-rightThumb)+nowRight) {
                result += 'L';
                leftThumb = midBtn.indexOf(num);
                nowLeft = 0;
            } else if (Math.abs(midBtn.indexOf(num)-rightThumb)+nowRight < Math.abs(midBtn.indexOf(num)-leftThumb)+nowLeft) {
                result += 'R';
                rightThumb = midBtn.indexOf(num);
                nowRight = 0;
            } else {
                if (hand === 'left') {
                    result += 'L';
                    leftThumb = midBtn.indexOf(num);
                    nowLeft = 0;
                } else {
                    result += 'R';
                    rightThumb = midBtn.indexOf(num);
                    nowRight = 0;
                }
            }
        }
    }
    
    numbers.forEach(press);
    
    var answer = result;
    return answer;
}