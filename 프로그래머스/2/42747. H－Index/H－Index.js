// 발표한 논문 n개
// 발표한 논문 중, h번 이상 인용된 논문이 h편 이상 && 나머지 논문이 h번 이하 인용되었다면, h의 최댓값이 이 과학자의 H-Index
function solution(citations) {
    var sorting = citations.sort((a, b) => a - b);
    
    let articleNum = citations.length
    
    let answer = 0;
    
    for (let i = 0; i < articleNum; i++) { 
        // 0 1 3 5 6
        // 10 100
        // 10000 10000
        let quote = sorting[i]
        let remain = articleNum - i
        
        if (quote >= remain) {
            answer = remain
            break
        }
    }
    
    return answer
}