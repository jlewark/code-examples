function string_to_minutes(date) {
    var date_format = /([0-9]+):([0-9]+) (AM|PM), DAY ([0-9]+)/;
    var match = date_format.exec(date);
    var hours = parseInt(match[1]);
    var minutes = parseInt(match[2]);
    var days = parseInt(match[4]) - 1;
    if (match[1] === "12") {
        hours = 0;
    }
    if (match[3] === "PM") {
        hours += 12;
    }
    //factor in start hour
    hours -= 8;
    return hours * 60 + minutes + days * 60 * 24;
}

module.exports = function(input) {
    var sum = 0;
    for(var i = 0; i < input.length; i++) {
        sum += string_to_minutes(input[i]);
    }
    return Math.round(sum / input.length);
};