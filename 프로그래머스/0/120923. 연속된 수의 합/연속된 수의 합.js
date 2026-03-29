function solution(num, total) {
    let arr = Array(num).fill(0).map((_, idx) => idx + 1);
    const temp = (arr[0] + arr.at(-1)) * num / 2
    
    if (temp === total) return arr;
    
    const differ = (total - temp) / num
    const answer = arr.map(v => v + differ)
    
    return answer;
}