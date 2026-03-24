function solution(A, B) {
    if (A === B) return 0;
    return (B + B).indexOf(A);
}