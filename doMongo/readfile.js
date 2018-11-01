



var readData = function() {
    var fs = require('fs');	
    var ind = fs.readFileSync('8-14ToOct31.json');
//    var buf= new Buffer(ind, 'utf8');
//    response.send(buf.toString());
    return ind;
};


var parseAndRead = function(str) {
    var riverData = JSON.parse(str);
    console.log( 'var getText = function() {return([');
    riverData.value.timeSeries[0].values[0].value.forEach (function (element, index, array) {
        console.log ( "{ time: '" + element.dateTime + "',  height: " + element.value + "  },");
    });
    console.log('] )};');
    console.log('module.exports = getText;');
};
                                                          

var data = readData();

parseAndRead(data);
