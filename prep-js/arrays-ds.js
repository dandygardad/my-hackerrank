function reverseArray(a){
    let data = []
    for(let i=a.length; i > 0; i--){
        data.push(a[i-1])
    }
    return data
}

console.log(reverseArray([1,4,3,2]))