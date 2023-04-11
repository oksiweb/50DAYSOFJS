function reverseGivenInteger(num) {
    let reversed = 0;
    let sign = Math.sign(num)
    num = Math.abs(num);
    while(num !== 0){
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return sign * reversed;
}

module.exports = reverseGivenInteger;
