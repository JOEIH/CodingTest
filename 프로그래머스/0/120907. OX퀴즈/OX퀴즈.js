function solution(quiz) {
    var answer = [];
    
     for (let i of quiz) {
         const arr = i.split(' ');
         
         const front = Number(arr[0]);
         const back = Number(arr[2]);
         
         const result = arr[1] === '+' ? front + back : front - back;
         
         result === Number(arr[4]) ? answer.push('O') : answer.push('X');
     }
    
    return answer;
}