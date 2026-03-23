function solution(common) {
    const cd = common[1] - common[0];

    // 등차수열
    if (common[0] + cd * (common.length - 1) === common.at(-1)) {
        return common.at(-1) + cd; 
    } 
    
    // 등비수열
    return common.at(-1) * (common[1] / common[0]); 
}