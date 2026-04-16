function solution(phone_book) {
    let map = new Map()
    
    phone_book.sort()
    phone_book.forEach(v => map.set(v, true))
    
    for (let i of phone_book) {
        let check = ''
        for (let ch of i) {
            check += ch;
            if (check !== i && map.has(check)) return false;
        }
    }
    
    return true;
}