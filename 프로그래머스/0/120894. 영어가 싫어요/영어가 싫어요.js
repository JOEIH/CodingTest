function solution(numbers) {
    const map = new Map(
        ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].map((k, i) => [k, i.toString()])
    );
    
    // let answer = []
    let answer = ''
    let cur = ''
    
    for (let ch of numbers) {
        cur += ch
        if (map.has(cur)) {
            // answer.push(map.get(cur))
            answer += map.get(cur)
            cur = ''
        }
    }

    // return parseInt(answer.join(''), 10);
    return parseInt(answer, 10)
}