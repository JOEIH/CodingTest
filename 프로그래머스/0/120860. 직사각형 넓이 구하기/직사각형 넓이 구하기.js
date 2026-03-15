function solution(dots) {
    let startDots = dots[0]
    let width = 0;
    let height = 0;
    
    for (let i = 1; i < dots.length; i++) {
        if (dots[i][0] == startDots[0]) {
            height = Math.abs(startDots[1] - dots[i][1])
        } else {
            width = Math.abs(startDots[0] - dots[i][0])
        }
    }
    
    return width * height;
}