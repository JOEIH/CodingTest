function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    let graph = {};
    
    function compare(a, b) {
        let count = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) count++;
        }
        return count;
    }
    
    for (let i = 0; i < words.length; i++) {
        if (!graph[begin]) graph[begin] = []
        if (compare(begin, words[i]) === 1) graph[begin].push(words[i])
        if (words[i] !== target) {
            for (let j = 0; j < words.length; j++) {
                if (!graph[words[i]]) graph[words[i]] = []
                if (compare(words[i], words[j]) === 1) graph[words[i]].push(words[j]);
            }
        }
    }
    
    let queue = [begin];
    let visited = new Set([begin]);
    let answer = 0;
    
    while (queue.length > 0) {
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if (!graph[cur]) continue;
            
            for (let word of graph[cur]) {
                if (!visited.has(word)) {
                    visited.add(word);
                    queue.push(word);
                }
                
                if (word === target) return answer + 1;
            }
        }
        answer++;
    }
    
    return answer;
}

