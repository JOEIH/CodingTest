function solution(a, b) {
    var answer = 0;
    var test = String(a) + String(b);
    if(test > String(b)+String(a)){
        answer = test;
    }else{
        answer = String(b)+String(a);
    }
    return Number(answer);
}

solution(9, 91);