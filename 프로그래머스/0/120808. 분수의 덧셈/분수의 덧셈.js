// 유클리드 호제법
function solution(numer1, denom1, numer2, denom2) {
    // 통분해서 먼저 더함
    const denom = denom1 * denom2;
    const numer = numer1 * denom2 + numer2 * denom1;
    
    // 분자, 분모 최대공약수
    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
    const gcd = getGCD(numer, denom);
    
    // 최대공약수로 나눈 값
    return [numer / gcd, denom / gcd]
}