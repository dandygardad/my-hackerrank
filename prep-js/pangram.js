function pangrams(s) {
    // Write your code here
    // Buat object
    let alphabetCheck = {}
    
    // Isi data ke object
    for(let letter of s){
        if(letter == ' ') continue
        alphabetCheck[letter.toLowerCase()] = (alphabetCheck[letter.toLowerCase()] + 1 || 1)
    }
    
    // Hitung jika lengthnya sama dengan 26
    if(Object.keys(alphabetCheck).length === 26){
        return "pangram"
    } else {
        return "not pangram"
    }
    
    // Return string

}