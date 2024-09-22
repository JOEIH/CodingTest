function solution(queue1, queue2) {
    var answer;
    let cnt = 0;
    let length = queue1.length * 3
    
    function sum(queue) {
        return queue.reduce((a,b) => a + b);
    }
    
    let sum_one = sum(queue1);
    let sum_two = sum(queue2);
    
    let total = (sum_one + sum_two) / 2;
    
    if(Number.isInteger(total) === false) return -1;

    let queue1_i = 0;
    let queue2_i = 0;
    while(cnt < length) {
        if(sum_one == total && sum_two == total) {
            answer = cnt
            return answer;
        }
        
        if(sum_one - sum_two < 0) {
            cnt += 1;
            let shifted = queue2[queue2_i];
            queue1.push(shifted);
            sum_one += shifted;
            sum_two -= shifted;
            queue2_i++;

            continue;
        } 
        
        if (sum_one - sum_two > 0) {
            cnt += 1;
            let shifted = queue1[queue1_i];
            queue2.push(shifted);
            sum_one -= shifted;
            sum_two += shifted;
            queue1_i++;

            continue;
        }
    }

    answer = -1;
    return answer;
}