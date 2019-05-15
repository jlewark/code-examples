var should = require('should');
var hot_phases = require('../lib/hot_phrases');

describe('Hot Phases', function() {

    it('return an array of top 5 phases', function(done) {

        hot_phases(function(err, result) {
            console.log("Top 5 Hot Phrases:\n" + JSON.stringify(result, undefined, 2));
            should.exist(result);
            result.length.should.equal(5);
            done();
        });
    });

});