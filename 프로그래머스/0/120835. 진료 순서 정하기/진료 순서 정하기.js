function solution(emergency) {
    const sorting = [...emergency].sort((a, b) => b - a)
    return emergency.map((v) => sorting.indexOf(v) + 1);
}