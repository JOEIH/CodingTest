function solution(keyinput, board) {
    let answer = [0, 0]

    keyinput.forEach(v => {
        if (v === 'left') answer[0] - 1 > -board[0]/2 ? answer[0] -= 1 : answer[0];
        if (v === 'right') answer[0] + 1 < board[0]/2 ? answer[0] += 1 : answer[0];
        if (v === 'up') answer[1] + 1 < board[1]/2 ? answer[1] += 1 : answer[1];
        if (v === 'down') answer[1] - 1 > -board[1]/2 ? answer[1] -= 1 : answer[1];
    })
    
    return answer;
}