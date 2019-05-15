var should = require('should');
var race_times = require('../lib/race_times');

describe('Race Times', function() {

    it('should fulfil example case 1', function() {
        var input = [
            "12:00 PM, DAY 1",
            "12:01 PM, DAY 1"
        ];
        var output = 241;
        var result = race_times(input);
        result.should.equal(241);
        console.log("Input:\n" + JSON.stringify(input, undefined, 2));
        console.log("Expected Output:\n" + output);
        console.log("Actual Output:\n" + result);

    });

    it('should fulfil example 2', function() {
        var input = [
            "12:00 AM, DAY 2"
        ];
        var output = 960;
        var result = race_times(input);
        result.should.equal(960);
        console.log("Input:\n" + JSON.stringify(input, undefined, 2));
        console.log("Expected Output:\n" + output);
        console.log("Actual Output:\n" + result);
    });

    it('should fulfil example 3', function() {
        var input = [
            "02:00 PM, DAY 19",
            "02:00 PM, DAY 20",
            "01:58 PM, DAY 20"
        ];
        var output = 27239;
        var result = race_times(input);
        result.should.equal(27239);
        console.log("Input:\n" + JSON.stringify(input, undefined, 2));
        console.log("Expected Output:\n" + output);
        console.log("Actual Output:\n" + result);
    });

});