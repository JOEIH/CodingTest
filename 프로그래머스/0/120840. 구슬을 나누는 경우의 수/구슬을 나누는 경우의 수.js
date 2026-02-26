function solution(balls, share) {
    let ballsArr = []
    let shareArr = []
    
    for (let i = 1; i <= balls; i++) {
        ballsArr.push(i)
    }
    
    for (let k = 1; k <= share; k++) {
        shareArr.push(k)
    }
    
    const answer = ballsArr.slice(balls-share).reduce((acc, cur)  => acc * cur) / shareArr.reduce((acc, cur) => acc * cur)
    
    return Math.round(answer);
}