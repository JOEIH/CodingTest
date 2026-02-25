function solution(emergency) {
    const sorting = [...emergency].sort((a, b) => b - a)
    let sortingMap = new Map()
    let answer = []
    
    sorting.forEach((v, index) => {
        sortingMap.set(v, index + 1)
    })
    
    answer = emergency.map((v) => {
        return v = sortingMap.get(v)
    })

    return answer;
}