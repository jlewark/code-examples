var request = require('request');
var api_address = "https://api-ssl.bitly.com";
var phases_path = "/v3/realtime/hot_phrases";
// Don't keep token in code simple way is to use env variables
var bitly_token = process.env.BITLY_TOKEN;

module.exports = function hot_phases(callback) {
    if (!bitly_token) {
        throw new Error('Please set token in environment value BITLY_TOKEN');
    }
    var options = {
        url: api_address + phases_path,
        method: 'GET',
        qs: {
            "access_token": bitly_token
        },
        json: true
    };
    request(options, function(err, resp, body) {
        if (err) {
            console.log('Error');
            console.log(err);
            return callback(new Error('Failure to get resp from API'), undefined);
        }
        if (resp && resp.statusCode != 200) {
            console.log('Error StatusCode');
            console.log(resp.statusCode);
            return callback(new Error('Failure to get resp from API statusCode: ' + resp.statusCode), undefined);
        }
        var result = [];
        for (var i = 0; i < 5; i++) {
            if (body.data.phrases[i]) {
                result.push(body.data.phrases[i].phrase);
            }
        }
        callback(undefined, result);
    });
};