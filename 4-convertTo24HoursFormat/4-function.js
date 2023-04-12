const time = '12:10AM';

function convertTo24HrsFormat(time) {
    let newFormat = time.slice(0, -2).split(':').map(Number);
    let [hours, minutes] = newFormat;
    const isPM = time.endsWith('PM');

    if (isPM && hours !== 12) hours += 12;
    if (!isPM && hours === 12) hours = 0;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

module.exports = convertTo24HrsFormat;
