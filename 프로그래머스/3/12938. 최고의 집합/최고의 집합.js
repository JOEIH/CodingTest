function solution(n, s) {
	if (n > s) return [-1]; //n의 개수가 s보다 크면 합이 s가 될 수 없으므로 return [-1]
   
    const startNum = Math.floor(s/n);
    const rest = s%n;
    
    const answer = new Array(n).fill(startNum); 
    
    for(let i = 0; i < rest; i++) {
		answer[answer.length - 1 - i]++;
    }
        
    return answer;
}