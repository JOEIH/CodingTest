function solution(box, n) {
    const count = (length) => Math.floor(length / n);
    const [w, h, d] = box;

    return count(w) * count(h) * count(d);
}