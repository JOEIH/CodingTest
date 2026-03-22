function solution(id_pw, db) {
    var answer = 'fail';
    
    for (let i of db) {
        if (id_pw[0] == i[0]) {
            answer = 'wrong pw';
            if (id_pw[1] == i[1]) {
                answer = 'login';
                break;
            }
        }
    }
    
    return answer;
}