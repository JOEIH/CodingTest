function solution(order) {
    const numSet = new Set([3, 6, 9])
    return order.toString().split('').filter(v => numSet.has(Number(v))).length
}