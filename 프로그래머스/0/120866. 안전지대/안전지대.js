function solution(board) {
    const N = board.length;
    
    // 8방향 탐색을 위한 방향 배열 (상하좌우 및 대각선)
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
    
    // 1. 지뢰(1) 주변을 위험지역(2)으로 마킹
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            // 진짜 지뢰(1)를 발견했을 때만 주변을 터뜨림
            if (board[i][j] === 1) {
                for (let k = 0; k < 8; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];
                    
                    // 맵 범위를 벗어나지 않으면서, 빈 공간(0)일 때만 위험지역(2)으로 변경
                    if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === 0) {
                        board[nx][ny] = 2; 
                    }
                }
            }
        }
    }

    // 2. 최종적으로 남은 안전한 지역(0)의 개수 세기
    let safeAreaCount = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === 0) {
                safeAreaCount++;
            }
        }
    }

    return safeAreaCount;
}