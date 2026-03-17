function solution(spell, dic) {
    let answer = 2;
    
    let spellSet = new Set(spell); // Set의 has 메서드를 쓰기 위해서 선언
    let curSet = new Set() // 중복 제거를 위해서 선언
    
    for (let v of dic) {
		    // dic 안 문자열의 문자 하나하나를 순회
        for (let ch of v) {
		        // 만약 spell에 있는 요소라면, curSet에 추가(중복은 자동으로 걸러짐)
		        // 1. 여기서 abcd 이런 문자열의 경우 d를 빼고 curSet에 추가하므로 걸러내지 못하고 정답으로 처리
		        // 2. aabbcc 이런 경우에도 a, b, c 로 인식해서 걸러내지 못하고 정답으로 처리
            if (spellSet.has(ch)) curSet.add(ch)
        }
        
        // 문자열 한 개를 다 돌고 나왔을 때 spell 안 요소의 개수와 curSet의 크기가 같다면
        if (spellSet.size === curSet.size) {
		        // answer를 1로 바꾸고 return
            return answer = 1;
        } else {
		        // 다음 문자열 검사를 위해 curSet을 비워줌
            curSet.clear();
        }
    }
		
		// 정답 리턴
    return answer;
}