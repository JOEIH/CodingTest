function solution(msg) {
    var answer = []; //출력할 배열
    let dict = [0, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //사전 초기화 인덱스 1번부터 시작
    
    let i = 0;
    let word = msg[i]; 
    while(i !== msg.length) { //마지막 인덱스에 도달할 때까지
	    idx = dict.indexOf(word) 
	    
	    if (idx !== -1) {
            if (i + 1 == msg.length) {
                answer.push(idx)
                return answer
            } else {
                word += msg[i+1];
                i++;
            }
	    } else {
		    dict.push(word)
		    let preWord = word.slice(0, -1);
		    pre = dict.indexOf(preWord)
		    answer.push(pre);
		    word = msg[i];
	    }
    }
}