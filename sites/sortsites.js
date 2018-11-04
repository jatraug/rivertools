// sort sites


var readData = function() {
    var fs = require('fs');	
    var ind = fs.readFileSync('sitesWithGageHeight.txt');
    return ind;
};

var sortem = function() {
    var data = JSON.parse(readData());
    var done = data.sort(function(a,b) {
        return (a.siteName > b.siteName ? 1 : -1);
    });
    var fs = require('fs');

        return done;
};

var writeSorted = function(data) {
    var sortedFile = "sitesToUse.json";
    var line = "";
    var first = true;
    data.forEach(function(element, array, index) {
        if( first === true){
            first = false;
            line = "[\n";
        }else{
            line += ",";
        }
        console.log('hoo');
        line += "{\"siteIndex\": \"" + element.siteIndex + "\", \"siteName\" : \"" + element.siteName + "\"}\n";

    });
    line += "\n]";
    console.log('done');
    
    var fs = require('fs');
    fs.writeFileSync(sortedFile, line);
};



    
    
var sorted = sortem();
writeSorted(sorted);

                 
