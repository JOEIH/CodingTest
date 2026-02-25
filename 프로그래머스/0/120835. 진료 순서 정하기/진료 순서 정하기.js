function solution(emergency) {
    const sorting = [...emergency].sort((a, b) => b - a)
    let sortingMap = new Map()
    
    sorting.forEach((v, index) => {
        sortingMap.set(v, index + 1)
    })

    return emergency.map((v) => {
        return v = sortingMap.get(v)
    });
}