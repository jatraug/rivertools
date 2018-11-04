// mkindex - ouput index.html and reversires.js

// one output file:
var rSites = 'riversites.js';
// output file for  index.html inclusion;
var rIndex = 'indexAdd.txt';

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
    // index,html line:
    var IDline = "";
    RSline += "//riversites.js - made my mkindex.js - DO NOT EDIT!\n\n";
    RSline+= "var mkgetSiteFromIndex = function() {\n";
    RSline += "var riverArr = [\n";
    IDline += "<!-- Generated section by mkindex.js, DO NOT EDIT! -->\n\n"
//    IDline += " <button type='submit', onclick=buttonClick()>Get River Data< /button>\n";
    IDline += "<select id='riverlist' label='Choose a river'>";
    data.forEach(function(element,arr, ind) {
        console.log(element.siteIndex);
        RSline += '{\"siteIndex\": \"' + element.siteIndex + '\", \"siteName\":\"' + element.siteName + '\"},\n'
    IDline += "<option value=\'" + element.siteName + "\'>" + element.siteName + "</option>\n";
    });

    RSline += "];\nreturn (function(index) {\nreturn riverArr[index].siteIndex;\n    });\n};";
    IDline += "</body></html>";
    fs.writeFileSync(rSites, RSline);
    fs.writeFileSync(rIndex, IDline);
};


makefiles();
