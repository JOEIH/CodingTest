function solution(n, m) {
    let temp;
    //항상 n < m이 되도록
    if (n > m) {
        temp = n;
        n = m;
        m = temp;
    }
    
    //최대공약수
    let gcd = (n, m) => {
        while(m % n > 0) {
            let R = m % n;
            m = n;
            n = R;
        }
        return n
    }
    
    //최소공배수 = 두 수의 곱 / 최대공약수
    let lcm = (n, m) => {
        return (n * m) / gcd(n,m)
    }

    return [gcd(n,m), lcm(n,m)]
}