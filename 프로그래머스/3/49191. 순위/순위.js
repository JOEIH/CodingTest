function solution(n, results) {
    var answer = 0;
    const winGraph = {};
    const loseGraph = {};
    
    
    //이긴 사람, 진 사람을 기준으로 하는 두 그래프 생성
    for (let [a,b] of results) {
        winGraph[a] ? winGraph[a].push(b) : winGraph[a] = [b];
        loseGraph[b] ? loseGraph[b].push(a) : loseGraph[b] = [a];
    }
    console.log(winGraph, loseGraph)
    
    function bfs(graph, start) {
        const queue = [start];
        const visited = [];
        visited[start] = true;
        let result = 0;
        
        while (queue.length > 0) {
            const node = queue.shift();
            for (let nextNode of (graph[node] || [])) {
                if (visited[nextNode] !== true) {
                    visited[nextNode] = true;
                    queue.push(nextNode);
                    result++;
                } 
            }
        }
        return result;
    }
    
    for (let i = 1; i <= n; i++) {
        if (bfs(winGraph, i) + bfs(loseGraph, i) === n - 1) {
            answer++;
        }
    }
    
    return answer;  
}