function twoArrays(k, A, B) {
    // Write your code here
    // Sort
    A.sort((a, b) => a-b)
    B.sort((a, b) => b-a)
    
        
    // Looping nilai
    for(let i = 0; i < A.length; i++){
        // Dalamnya bandingin k >= check
        if((A[i] + B[i]) >= k) continue
        else return "NO"
    }
    
    return "YES"
}