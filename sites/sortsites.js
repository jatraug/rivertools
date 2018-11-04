// sort sites


var readData = function() {
    var fs = require('fs');	
    var ind = fs.readFileSync('sitesToUse.json');
    return ind;
};

var sortem = function() {
    var data = JSON.parse(readData());
    var done = data.sort(function(a,b) {
        return (a.siteName > b.siteName ? 1 : -1);
    });
    var fs = require('fs');

    done.forEach(function(element, arr, index) {
        console.log(element.siteName + "   " + element.siteIndex);
    })
};

sortem();
                     
