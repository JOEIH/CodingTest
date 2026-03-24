function solution(before, after) {
    const sorted_before = [...before].sort()
    const sorted_after = [...after].sort()
    
    return sorted_after.toString() === sorted_before.toString() ? 1 : 0;
}