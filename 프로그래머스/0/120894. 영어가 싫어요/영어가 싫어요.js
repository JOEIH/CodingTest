function solution(numbers) {
    const map = new Map([
        ['zero', 0],
        ['one', 1],
        ['two', 2],
        ['three', 3],
        ['four', 4],
        ['five', 5],
        ['six', 6],
        ['seven', 7],
        ['eight', 8],
        ['nine', 9],
    ])
    
    let answer = []
    // let answer = ''
    let cur = ''
    
    for (let ch of numbers) {
        cur += ch
        if (map.has(cur)) {
            answer.push(map.get(cur))
            // answer += map.get(cur)
            cur = ''
        }
    }

    return parseInt(answer.join(''), 10);
    // return parseInt(answer, 10)
}