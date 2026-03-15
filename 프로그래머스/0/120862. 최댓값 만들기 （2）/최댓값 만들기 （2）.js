function solution(numbers) {
    numbers.sort((a, b) => a - b);
    
    let front = numbers[0] * numbers[1];
    let back = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    
    return front > back ? front : back;
}