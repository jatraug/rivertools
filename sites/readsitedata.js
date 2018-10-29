



var readData = function() {
    var fs = require('fs');	
    var ind = fs.readFileSync('sitedata.json');
//    var buf= new Buffer(ind, 'utf8');
//    response.send(buf.toString());
    return ind;
};


var parseAndRead = function(str) {
    var siteData = JSON.parse(str);

///    console.log(siteData.value.timeSeries[0]);
    siteData.value.timeSeries.forEach (function(element, index, array) {
        if (element.variable.variableName === "Gage height, ft") {
            console.log("{'siteIndex' : '" + element.sourceInfo.siteCode[0].value + "', 'siteName' : '" + element.sourceInfo.siteName + "'},");
        }
//        console.log(element.sourceInfo.siteName);
//        console.log(element.sourceInfo.siteCode[0].value);
    });




//    siteData.value.timeSeries[0].values[0].value.forEach (function (element, index, array) {
//        console.log ( "Date & Time:  " + element.dateTime + "  Height: " + element.value + " feet");
//    });
};
                                                          

var data = readData();

parseAndRead(data);
