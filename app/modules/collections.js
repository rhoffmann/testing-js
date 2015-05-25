var sortBy = require('lodash/collection/sortBy');
var reduce = require('lodash/collection/reduce');
var sample = require('lodash/collection/sample');

var obj = {
    "key1" : {
        "value" : 2312,
        "timestamp" : 123423455
    },
    "key2" : {
        "value" : 2313,
        "timestamp" : 1234234554
    },
    "key5" : {
        "value" : 3433,
        "timestamp" : 123423455432
    },
    "key3" : {
        "value" : 4543,
         "timestamp" : 1234234558
    },
    "key4" : {
        "value" : 5345,
        "timestamp" : 12342345543
    }
};

exports.items = sortBy(obj, 'timestamp');

exports.zweitems = sortBy(obj, function(v, k) {
    return k;
});

// exports.dreitems = reduce(obj, function (result, v, k) {
//     return result + parseInt(v.value);
// }, 0);

// exports.random = function() {
//     return sample(zweitems);
// };
