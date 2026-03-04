function solution(my_string) {
    const deleteW = ['a', 'e', 'i', 'o', 'u'];
    return my_string.split('').filter((v) => !deleteW.includes(v)).join('')
    
    
     
}