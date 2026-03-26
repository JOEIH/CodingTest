function solution(a, b) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const calculated = gcd(a, b);
    
    let lower = b / calculated;

    while (lower % 2 === 0) {
        lower /= 2;
    }

    while (lower % 5 === 0) {
        lower /= 5;
    }
    
    return lower === 1 ? 1 : 2;
}