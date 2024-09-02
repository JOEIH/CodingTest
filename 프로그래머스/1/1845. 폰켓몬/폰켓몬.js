function solution(nums) {
    let max = nums.length/2
    let types = [...new Set(nums)];
    
    return types.length >= max ? max : types.length
}