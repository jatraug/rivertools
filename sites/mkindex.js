// mkindex - ouput index.html and reversires.js

// one output file:
var rSites = 'riversites.js';

var readData = function() {
    var fs = require('fs');	
    var ind = fs.readFileSync('sitesToUse.json');
    return ind;
};


var makefiles = function() { 
    var data = JSON.parse(readData());
    var fs = require('fs');
    // riversites.js line:
    var RSline="";
    RSline += "//riversites.js - made my mkindex.js - DO NOT EDIT!\n\n";
    RSline+= "var mkgetSiteFromIndex = function() {\n";
    RSline += "var riverArr = [\n";
    data.data.forEach(function(element,arr, ind) {
        console.log(element.siteIndex);
        RSline += '{\"siteIndex\": \"' + element.siteIndex + '\", \"siteName\":\"' + element.siteName + '\"},\n'
    });
    RSline += "];\nreturn (function(index) {\nreturn riverArr[index].siteIndex;\n    });\n};";
    fs.writeFileSync(rSites, RSline);
};


makefiles();
