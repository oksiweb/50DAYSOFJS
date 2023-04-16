const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

function getDaysBetweenDates(dateText1, dateText2) {
    let date1 = new Date(dateText1);
    let date2 = new Date(dateText2);
    return (date2 -date1)/DAY_IN_MILLISECONDS
}

module.exports = getDaysBetweenDates;
