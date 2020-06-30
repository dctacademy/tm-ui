function capitalization(str) {
    let str1 = '', str2 = '' 
    for(let i = 0; i < str.length; i++) {
        if(i % 2 == 0) {
            str1 += str[i].toUpperCase()
            str2 += str[i].toLowerCase()
        } else {
            str1 += str[i].toLowerCase()
            str2 += str[i].toUpperCase()
        }
    }
    return [str1, str2]
}   

console.log(capitalization('javascript'))