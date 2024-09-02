function solution(nums) {
    let arr = new Array(nums.length/2);
    let types = [...new Set(nums)];
    
    for (let i = 0; i < arr.length; i++){
        arr[i] = types[i];
    }
    
    let answer = arr.filter(el => el !== undefined)
    return answer.length
}