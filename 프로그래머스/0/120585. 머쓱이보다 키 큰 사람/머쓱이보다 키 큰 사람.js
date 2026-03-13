function solution(array, height) {
    array.sort((a, b) => a - b);
    
    let curIndex = 0
    // 키가 같은 사람도 고려
    // 키가 같으면 반복문 탈출
    while (height >= array[curIndex]) {
        curIndex++;
    }
        
    return array.length - curIndex;
}