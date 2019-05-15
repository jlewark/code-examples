


module.exports = function(input) {
    var output = [];
    for(var i = 0; i < input[0].length; i++) {
        if (!output[i]) {
            output[i] = '';
        }
        for(var j = 0; j < input.length; j++) {
            output[i] += input[j][0];
        }
    }
    return output;
};