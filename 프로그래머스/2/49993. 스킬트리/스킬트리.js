function solution(skill, skill_trees) {
    let answer = 0; // 가능한 스킬트리 개수
    
    function validation(item) {
        let skill_check = ''
        
        for (let i of item) {
            let index = skill.indexOf(i)
            
            if (index != -1) {
                skill_check += i
            }
        }
        
        return skill_check
    }
  
    for (let i = 0; i < skill_trees.length; i++) {
        if (skill.includes(validation(skill_trees[i]))) {
            if(skill.indexOf(validation(skill_trees[i])) == 0) {
            answer += 1
        }
        }
    }
    
    return answer;
}