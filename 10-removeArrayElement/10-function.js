function removeArrayElement(array, filterField) {
    return array.filter(el => el.field !== filterField);
}

module.exports = removeArrayElement;
