function solution(polynomial) {   
    let num = 0;
    let xCount = 0;
    
    for (let i of polynomial.split(' + ')) {
        if (i.includes('x')) {
            let frontNum = i.replace('x', '')
            xCount += frontNum === '' ? 1 : Number(frontNum);
        } else {
            num += Number(i)
        }
    }
    
    let answer = [];
    
    if (xCount !== 0) answer.push(xCount === 1 ? 'x' : `${xCount}x`)
    if (num !== 0) answer.push(num)
    
    return answer.join(' + ')
}