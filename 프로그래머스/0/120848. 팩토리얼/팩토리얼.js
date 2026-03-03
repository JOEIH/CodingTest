function solution(n) {
    let num = 1
    let store = 1
    
    while (store * (num + 1) <= n) {
        num++
        store *= num
    }
    
    return num
}

