function solution(spell, dic) {
    // dic을 순회하며 조건을 만족하는 단어가 하나라도 있는지(some) 검사
    const isExist = dic.some(word => 
        word.length === spell.length && spell.every(c => word.includes(c))
    );
    
    return isExist ? 1 : 2;
}