function solution(s) {
    let answer;
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        //stack의 마지막 요소가 '(' 이고, s[i]가 ')'면 스택에 마지막으로 추가된 요소를 pop
        if(stack[stack.length - 1] === '(' && s[i] ===')'){
            stack.pop();
        } else {
            //처음에는 무조건 s[0]의 값이 stack에 들어감
            //stack[0] = s[0]
            stack.push(s[i]);
        }
    }
    
    //stack이 비어있으면 true
    return !stack.length;
}