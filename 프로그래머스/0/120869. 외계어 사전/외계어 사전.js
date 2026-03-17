function solution(spell, dic) {
    let answer = 2;
    
    let spellSet = new Set(spell);
    let curSet = new Set()
    
    dic.forEach(v => { 
        for (let ch of v) {
            if (spellSet.has(ch)) curSet.add(ch)
        }
        if (spellSet.size === curSet.size) {
            return answer = 1;
        } else {
            curSet.clear();
        }
    })

    return answer;
}