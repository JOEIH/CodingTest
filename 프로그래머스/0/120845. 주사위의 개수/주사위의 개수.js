function solution(box, n) {
    const count = (length) => {
        return Math.floor(length / n)
    }

    return count(box[0]) * count(box[1]) * count(box[2]);
}