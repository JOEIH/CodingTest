function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    for (let i of num_list) {
        i % 2 ? odd += 1 : even += 1
    }
    
    return [even, odd];
}