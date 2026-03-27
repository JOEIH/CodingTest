function solution(babbling) {
    const babble = ['aya', 'ye', 'woo', 'ma'];
    
    for (let i of babble) {
        babbling = babbling.map(v => v.includes(i) ? v = v.replace(i, ' ') : v)
    }
    
    return babbling.filter(v => v.trim().length === 0).length;
}