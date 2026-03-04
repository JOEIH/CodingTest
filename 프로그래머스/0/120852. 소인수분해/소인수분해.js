function solution(n) {
    var answer = []
    let devide = (n, num) => n % num ? n : devide(n / num, num)
  
    const decimal = [2, 3, 5, 7, 11, 13, 17]
    
    for (let i = 0; i < decimal.length; i++) {
        if (n % decimal[i] === 0) {
            answer.push(decimal[i])
            n = devide(n, decimal[i])
        }
    }
    
    if (n > 17) {
      for (let i = 19; i < n; i++) {
          if (n % i === 0) {
            answer.push(i)
            n = devide(n, i)
          }
      }  
    } 
    
    if (n > 1) answer.push(n)
    
    return answer
}