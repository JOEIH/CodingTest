function solution(before, after) {
    const sorted_before = [...before].sort()
    const sorted_after = [...after].sort()
    
    return sorted_after.join() === sorted_before.join() ? 1 : 0;
}