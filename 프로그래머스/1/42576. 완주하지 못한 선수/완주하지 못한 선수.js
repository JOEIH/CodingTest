function solution(participant, completion) {
  const participantSet = [...new Set(participant)];
  const completionSet = [...new Set(completion)];

  if (participantSet.length !== completionSet.length) { 
    //동명이인이 아닌 사람이 미완주자일 때
    for (let i = 0; i < participantSet.length; i++) {
      if (!completionSet.includes(participantSet[i])) {
        return participantSet[i]
      } 
    }
  } else {  //동명이인인 사람이 미완주자일 때 
    const idxArr = [];
    for (let i = 0; i < participant.length; i++) {
        participant.map((el, idx) => {
            if (el === completion[i] && !idxArr.includes(idx)) {
                idxArr.push(idx);
            }
        })
    }
    return participant[idxArr[idxArr.length-1]];
  }
}