function solution(my_string) {
    return [...my_string].map(v => v.charCodeAt() <= 90 ? v.toLowerCase() : v.toUpperCase()).join('')
}