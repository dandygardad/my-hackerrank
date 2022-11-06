function birthday(s, d, m) {
    // Write your code here
    
    // Buat variable untuk tampung array yang benar
    let result = 0
    
    // Buat loop
    for(let i = 0; i < s.length; i++){
        let tempSlice = s.slice(i, i + m)
        console.log(tempSlice)
        let tempSum = tempSlice.reduce((total, curr) => {
            return total+curr
        })
        if(tempSum === d) result++
    }
    
    
    // Return berapa tampung array yang didapat
    return result
}