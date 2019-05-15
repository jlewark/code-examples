var should = require('should');
var high_value = require('../lib/high_value');

describe('High Value', function() {

    it('return top 10', function(done) {

        high_value(function(err, result) {
            console.log("Top 10 High Value:\n" + JSON.stringify(result, undefined, 2));
            result.length.should.equal(10);
            done();
        });
    });

});