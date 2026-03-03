function solution(box, n) {
    return box.reduce((acc, length) => acc * Math.floor(length / n), 1);
}