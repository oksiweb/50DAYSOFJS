function getTheGapX(str) {
    if(!str) return -1;
    let first = str.indexOf('X');
    let last = str.lastIndexOf('X');
    if(first !== -1 && last !== -1){
        return last - first
    } else {
        return -1
    }
}

module.exports = getTheGapX;
