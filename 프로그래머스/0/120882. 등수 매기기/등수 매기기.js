function solution(score) {
    let copy = [...score].map(v => v[0] + v[1]);
    let sorted = [...copy].sort((a, b) => b - a);
    return copy.map(v => sorted.indexOf(v) + 1);
}