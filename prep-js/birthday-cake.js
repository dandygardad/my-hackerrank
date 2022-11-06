function birthdayCakeCandles(candles){
    const max_arr = Math.max(...candles)

    return candles.filter(e => {
        if (e === max_arr){
            return e
        }
    }).length
}

console.log(birthdayCakeCandles([3,2,1,3,3]))