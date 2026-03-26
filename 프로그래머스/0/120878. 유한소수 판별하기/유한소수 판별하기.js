function solution(a, b) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    
    let lower = b / gcd(a, b);

    while (lower % 2 === 0) {
        lower /= 2;
    }

    while (lower % 5 === 0) {
        lower /= 5;
    }
    
    return lower === 1 ? 1 : 2;
}