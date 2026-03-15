function solution(polynomial) {   
    let num = 0;
    let xCount = 0;
    
    for (let i of polynomial.split(' ')) {
        if (i[i.length - 1] === 'x') {
            let frontNum = i.slice(0, i.length - 1)
            frontNum === '' ? xCount += 1 : xCount += Number(frontNum);
        } else if (i !== '+') {
            num += Number(i)
        }
    }
    
    xCount = xCount === 1 ? '' : xCount;
    
    if (num !== 0 && xCount !== 0) return `${xCount}x + ${num}`
    if (num === 0) return `${xCount}x`
    if (xCount === 0) return `${num}`
}