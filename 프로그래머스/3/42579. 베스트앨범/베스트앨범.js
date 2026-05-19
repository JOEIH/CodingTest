function solution(genres, plays) {
    const playMap = {};
    const orderMap = {};
    
    // 순서를 담는 해시맵, 노래를 담을 해시맵 만들기
    for (let i = 0; i < genres.length; i++) {
        if (!playMap[genres[i]]) {
            playMap[genres[i]] = [];
            orderMap[genres[i]] = 0;
        };
        playMap[genres[i]].push([i, plays[i]]);
        orderMap[genres[i]] += plays[i];
    }
    
    // 재생수로 내림차순 정렬
    const sortedGenres = Object.keys(orderMap).sort((a, b) => orderMap[b] - orderMap[a]);
    
    let answer = [];
    
    for (let genre of sortedGenres) {
        playMap[genre].sort((a, b) => {
            if (a[1] === b[1]) return a[0] - b[0];
            return b[1] - a[1];
        });
        
        for (let i = 0; i < 2; i++) {
            if (playMap[genre][i]) answer.push(playMap[genre][i][0]);
        }
    }

    return answer;
}