function solution(sizes) {
    let width = [];
    let height = [];
    
    sizes.forEach((card) => {
        if (card[0] < card[1]) {
            [card[0], card[1]] = [card[1], card[0]]
        }
        width.push(card[0])
        height.push(card[1])
    })
 
    width.sort((a, b) => b - a)
    height.sort((a, b) => b - a)
    
    return width[0] * height[0]
    
}