function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({
        priority: priority,
        index: index
    }))
    
    let order = 0;

    while(queue.length > 0) {
        let current = queue.shift();
        
        let hasHigherPriority = queue.some(process => process.priority > current.priority)
        
        if (hasHigherPriority) {
            queue.push(current);
        } else {
            order++;
            
            if (current.index === location) {
                return order;
            }
        }
    }
}