



var readData = function() {
    var fs = require('fs');	
    var ind = fs.readFileSync('sitedata.json');
//    var buf= new Buffer(ind, 'utf8');
//    response.send(buf.toString());
    return ind;
};

var hasGageHeight = function(ts) {
    if (ts.variable.variableName === "Gage height, ft") {
        return true;
    }
    return false;
};


var parseAndRead = function(str) {
    var siteData = JSON.parse(str);
    var line = "";
    var first = true;

    ///    console.log(siteData.value.timeSeries[0]);
    console.log("[");
    siteData.value.timeSeries.forEach (function(element, index, array) {
        if (hasGageHeight(element)) {
            if( first ===true){
                first = false;
                line = "";
            }else{
                line = ",";
            }
            line += "{\"siteIndex\": \"" + element.sourceInfo.siteCode[0].value + "\", \"siteName\" : \"" + element.sourceInfo.siteName + "\"}";
            console.log(line);
        }
//        console.log(element.sourceInfo.siteName);
//        console.log(element.sourceInfo.siteCode[0].value);
    });
    console.log("]");



//    siteData.value.timeSeries[0].values[0].value.forEach (function (element, index, array) {
//        console.log ( "Date & Time:  " + element.dateTime + "  Height: " + element.value + " feet");
//    });
};
                                                          

var data = readData();

parseAndRead(data);
