function solution(my_string, num1, num2) {
    const num1_ch = my_string[num1]
    const num2_ch = my_string[num2]
    
    return [...my_string].map((v, i) => {
        if (i == num1) return v = num2_ch
        if (i == num2) return v = num1_ch
        return v
    }).join('');
}