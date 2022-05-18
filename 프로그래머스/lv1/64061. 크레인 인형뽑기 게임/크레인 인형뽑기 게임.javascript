function solution(board, moves) {
    let myBucket = new Array(moves.length);
    myBucket.fill(0);
    
    // 인형 뽑기
    for (let i = 0; i<moves.length; i++) {
        for (let j = 0; j<board.length; j++) {
            if (board[j][moves[i]-1] === 0) {
                myBucket[i] = 0;
            }  else {
                myBucket[i] = board[j][moves[i]-1];
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    
    // 터뜨리기
    let bombCnt = 0;
    let noZero = myBucket.filter((e) => e !== 0);
    for (let i = 0; i < noZero.length-1; i) {
        if (noZero[i] === noZero[i+1]) {
            noZero.splice(i,2);
            bombCnt++;
            i = 0;
        } else {
            i++;
        }
    }
    
  
    return bombCnt*2
}