var should = require('should');
var text_blocking = require('../lib/text_blocking');


describe('text blocking', function() {

    it('should fulfil example case 1', function() {
        var input = [
            "AAA",
            "BBB",
            "CCC"
        ];
        var output = [
            "ABC",
            "ABC",
            "ABC"
        ];
        var result = text_blocking(input);
        result[0].should.equal("ABC");
        result[1].should.equal("ABC");
        result[2].should.equal("ABC");
        console.log("Input:\n" + JSON.stringify(input, undefined, 2));
        console.log("Expected Output:\n" + JSON.stringify(output, undefined, 2));
        console.log("Actual Output:\n" + JSON.stringify(result, undefined, 2));

    });

    it('should fulfil example 2a ', function() {
        var input = [
            "AAAAAAAAAAAAA"
        ];
        var output = [
            "A",
            "A",
            "A",
            "A",
            "A",
            "A",
            "A",
            "A",
            "A",
            "A",
            "A",
            "A",
            "A"
        ];
        var result = text_blocking(input);
        for (var i = 0; i < input[0].length; i++) {
            result[i].should.equal("A");
        }
        console.log("Input:\n" + JSON.stringify(input, undefined, 2));
        console.log("Expected Output:\n" + JSON.stringify(output, undefined, 2));
        console.log("Actual Output:\n" + JSON.stringify(result, undefined, 2));
    });

    it('should fulfil example 2b ', function() {
        var input = [
            "A",
            "A",
            "A",
            "A",
            "A"
        ];
        var output = [
            "AAAAA"
        ];
        var result = text_blocking(input);
        result[0].should.equal("AAAAA");
        console.log("Input:\n" + JSON.stringify(input, undefined, 2));
        console.log("Expected Output:\n" + JSON.stringify(output, undefined, 2));
        console.log("Actual Output:\n" + JSON.stringify(result, undefined, 2));
    });

});
