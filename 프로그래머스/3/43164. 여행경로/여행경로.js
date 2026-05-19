function solution(tickets) {
    let answer = [];
    let graph = {};
    
    for (const [depart, dest] of tickets) {
        if (!graph[depart]) graph[depart] = [];
        graph[depart].push(dest);
    }
    
    for (const depart in graph) {
        graph[depart].sort((a, b) => a > b ? -1 : 1);
    }
    
    // dfs 함수 정의
    function dfs(node) {
        while (graph[node] && graph[node].length > 0) {
            let cur = graph[node].pop();
            dfs(cur);
        }
        answer.push(node);
    }
    
    dfs('ICN');
    
    return answer.reverse();
}