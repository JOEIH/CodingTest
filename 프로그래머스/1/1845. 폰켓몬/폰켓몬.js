function solution(nums) {
    let arr = []
    let types = [...new Set(nums)];
    
    for (let i = 0; i < nums.length/2; i++){
        if(types[i] !== undefined) arr.push(types[i]);
    }
    
    return arr.length
}