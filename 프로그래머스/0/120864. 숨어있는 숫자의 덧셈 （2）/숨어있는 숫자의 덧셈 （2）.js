function solution(my_string) {
    let stack = [];
    
    let cur = '';
    [...my_string].forEach(v => {
        if (Number.isInteger(Number(v))) {
            cur += v;
        } else {
            stack.push(Number(cur));
            cur = '';
        }
    })
    
    if (cur !== '') {
        stack.push(Number(cur))
    }
    
    return stack.reduce((acc, cur) => acc + cur, 0);
}