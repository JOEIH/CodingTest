function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;
    let w = 0, h = 0;
    
    for (let i = 1; i < Math.floor(total); i++) {
        if(total % i == 0) {
            h = i;
            w = total / i;
        }
            
        if(yellow == (w-2)*(h-2) && w >= h) {
            return answer = [w, h]
        }
    }
}