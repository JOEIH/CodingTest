function solution(quiz) {
    var answer = [];
    
    for (let i of quiz) {
        const arr = i.split(' ');
        const [num1, operator, num2, equal, result] = arr;
        
        const calculate = operator === '+' ? Number(num1) + Number(num2) : Number(num1) - Number(num2);
        
        answer.push(calculate === Number(result) ? 'O' : 'X');
    }
    
    return answer;
}