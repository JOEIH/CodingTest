function solution(my_string) {
    const deleteW = ['a', 'e', 'i', 'o', 'u'];
    let answer = my_string.split('')
    
    for (let i of deleteW) {
        answer = answer.filter((v) => !deleteW.includes(v))
    }
    
    return answer.join('')
}