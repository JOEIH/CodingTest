function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = []; 

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const past_time = stack.pop(); 
      answer[past_time] = i - past_time; 
    }
    
    // 2. 폭락한 애들 다 쫓아냈으니, 지금 시간(i)도 대기열에 추가
    stack.push(i);
  }

  while (stack.length > 0) {
    const past_time = stack.pop();
    answer[past_time] = (prices.length - 1) - past_time;
  }

  return answer;
}