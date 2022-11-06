function diagonalDifference(arr) {
    // Write your code here
    
    // Initial variable
    let kiriKeKanan = 0
    let kananKeKiri = 0
    
    // For pertama untuk check kiri ke kanan
    for(let i = 0; i < arr.length; i++){
        kiriKeKanan += arr[i][i]
        kananKeKiri += arr[i][(arr.length - 1) - i]
    }
    
    
    // console.log(kiriKeKanan)
    // console.log(kananKeKiri)
    
    // hasilnya kurangin terus absolutin
    return Math.abs(kiriKeKanan - kananKeKiri)
}