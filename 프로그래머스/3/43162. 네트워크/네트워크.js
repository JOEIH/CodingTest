function solution(n, computers) {
    let answer = 0;
    let visited = new Set();
    
    function dfs(node) {
        for (let i = 0; i < n; i++) {
            if (computers[node][i] && !visited.has(i)) {
                visited.add(i);
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}