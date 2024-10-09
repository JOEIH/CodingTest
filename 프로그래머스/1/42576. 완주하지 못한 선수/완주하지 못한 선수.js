function solution(participant, completion) {
    let hash = {}
    
    participant.forEach((el) => {
        if(!hash[el]) {
            hash[el] = 1
        } else {
            hash[el]++
        }
    })
    
    completion.forEach((el) => {
        if(hash[el]) {
            hash[el]--;
        }
    })
    
    for(let i in hash) {
        if(hash[i] === 1) {
            return i
        }
    }
}