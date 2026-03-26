function solution(a, b) {
    var answer = 0;
    
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const calculated = gcd(a, b);
    
    let lower = b / calculated;
    
    if (lower % 2 === 0) {
        while (lower % 2 === 0) {
            lower /= 2;
        }
    }
    
    if (lower % 5 === 0) {
        while (lower % 5 === 0) {
            lower /= 5;
        }
    }
    
    return lower === 1 ? 1 : 2;
}