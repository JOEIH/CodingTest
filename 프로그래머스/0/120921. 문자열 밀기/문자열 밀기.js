function solution(A, B) {
    if (A === B) return 0;
    
    let a = A.split('');
    let count = 0;
    
    while (count !== a.length - 1) {
        if (a.join('') === B) break;
        
        let popped = a.pop();
        a.unshift(popped);
        count++;
    }
    
    return a.join('') === B ? count : -1;
}