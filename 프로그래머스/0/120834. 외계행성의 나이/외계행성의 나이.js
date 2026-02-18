function solution(age) {
    const ageAlphabet = 'abcdefghij'
    return [...age.toString()].map(num => ageAlphabet[num]).join('')
}