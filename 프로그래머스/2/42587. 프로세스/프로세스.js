function solution(priorities, location) {
    let executed = [];
    let order = 0;
    
    let newArr = [...priorities].map((v, idx) => v = [v, idx]);

    while(newArr.length > 0) {
        let max = Math.max(...priorities);
        if (max === newArr[0][0]) {
            executed.push(newArr[0]); 
            order++;
            if (newArr[0][1] === location) break;
        } else {
            newArr.push(newArr[0]);
            priorities.push(priorities[0]);
        }
        newArr = newArr.slice(1);
        priorities = priorities.slice(1);
    }
    
    return order;
}