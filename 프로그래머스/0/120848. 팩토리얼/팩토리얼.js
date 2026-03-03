function solution(n) {
    let num = 1
    let store = 1
    
    while (store < n) {
        if (store * (num + 1) > n) return num
        num++
        store *= num
    }
    
    return num
}

