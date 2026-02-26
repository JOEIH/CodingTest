function solution(hp) {
    let general = Math.floor(hp / 5);
    
    hp -= general * 5
    
    let soldier = hp >= 3 ? Math.floor(hp / 3) : 0;
    
    hp -= soldier * 3
    
    let normal = hp;
       
    return general + soldier + normal;
}