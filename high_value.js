var request = require('request');
var async = require('async');
var api_address = "https://api-ssl.bitly.com";
var high_value_path = "/v3/highvalue";
var link_social_path = "/v3/link/social";
// Don't keep token in code simple way is to use env variables
var bitly_token = process.env.BITLY_TOKEN;


function aysnc_social(link) {
    return function get_count(callback) {
        var options = {
            url: api_address + link_social_path,
            method: 'GET',
            qs: {
                "access_token": bitly_token,
                "link": link
            },
            json: true
        };
        request(options, function(err, resp, body) {
            if (err || resp.statusCode != 200) {
                console.log(err);
                return callback(new Error('Failure to get respone from API'), undefined);
            }
            callback(undefined, link + ' - ' + body.data["social_scores"][link]);
        });
    }
}


module.exports = function high_value(callback) {
    if (!bitly_token) {
        throw new Error('Please set token in environment value BITLY_TOKEN');
    }
    var options = {
        url: api_address + high_value_path,
        method: 'GET',
        qs: {
            "access_token": bitly_token,
            "limit": 10
        },
        json: true
    };
    request(options, function(err, resp, body) {
        if (err || resp.statusCode != 200) {
            console.log(err);
            return callback(new Error('Failure to get respone from API'), undefined);
        }
        var asyncHandlers = [];
        for (var i= 0; i < body.data.values.length; i++) {
            asyncHandlers.push(aysnc_social(body.data.values[i]));
        }
        async.parallel(asyncHandlers, function(err, result) {
            callback(undefined, result);
        });
    });
};