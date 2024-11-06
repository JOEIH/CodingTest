function solution(maps) {
    const n = maps.length; //행
    const m = maps[0].length; //열
    
    //이동 방향
    const directions = [
        [-1, 0], // 위
        [1, 0],  // 아래
        [0, 1],  // 오른쪽
        [0, -1], // 왼쪽
    ];
 
    //시작지점, 이동한 거리 넣어놓기
    const queue = [[[0,0], 1]];
    maps[0][0] = true; //시작점 true 체크
    
    while (queue.length > 0) {
        let [[row, col], path] = queue.shift();
        
        //반복문 종료 조건 -> 적팀 진영에 도착하면 반복문 종료하고 거리 반환
        if (row === n - 1 && col === m - 1) {
            return path;
        }
        
        for (let [r, c] of directions) {
            let nextRow = row + r;
            let nextCol = col + c;
            
            if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < m && maps[nextRow][nextCol] === 1) {
                queue.push([[nextRow, nextCol], path + 1]);
                //방문했으면 0으로 표시
                maps[nextRow][nextCol] = 0
            }
        }
    }
    return -1 
}