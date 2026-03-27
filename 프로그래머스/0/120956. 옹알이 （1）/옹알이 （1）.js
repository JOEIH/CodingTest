function solution(babbling) {
    const babble = ['aya', 'ye', 'woo', 'ma'];
    
    for (let i of babble) {
        babbling = babbling.map(v => v.replace(i, ' '))
    }
    
    return babbling.filter(v => v.trim().length === 0).length;
}