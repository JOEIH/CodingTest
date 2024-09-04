function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    let w = 0, h = 0;
    
    for (let h = 3; h < total; h++) {
        if(total % h == 0) {
            w = total / h;
        }
            
        if(yellow == (w-2)*(h-2) && w >= h) {
            return answer = [w, h]
        }
    }
}