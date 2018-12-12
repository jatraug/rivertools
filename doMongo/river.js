var log = require('./tools.js')('clog');

var Request = require('request');
var fetch = require('node-fetch');

log.clogOn();

// river.js - made from old server/river.js




// react to button click
var buttonClick = function() {

    log.clogOn();
    try{
    var url = 'https://waterservices.usgs.gov/nwis/iv/?sites=12155500&startDt=2018-08-04&format=json';
    var request = new Request(url, {method: 'get'});
    log.clog("yup");

    //  fetch('riverdata').then(function(response) {

        fetch(url)
            .then(res => res.json())
            .then(json => console.log(doJson(json)))
            .catch(e => console.log('ERR: ' + e));
        // fetch(request).then(function(response) {
        //     log.clog('R1');
        //     response.text().then(function(text) {
        //         log.clog('R2');
        //     var rdata = doJson(text);
        //     console.log(rdata);
        // });
                  //)});
        log.clog('done');
    }catch(e) {
        console.log ('ERROR: ' + e);
    }
};



var doJson = function(str) {
    var riverDataArr = [];
    var riverData = str; //JSON.parse(str);
    // Put needed river data in array:
    var ind = determineWhichTimeseries(riverData.value.timeSeries);
    log.clog("ind = " + ind);
    riverData.value.timeSeries[ind].values[0].value.forEach (function (element, index, array) {

        var dTime = parseDateAndTime(element.dateTime);
        riverDataArr.push ({date: dTime, height: element.value});
        log.clogOn();
        log.clog( dTime, '   ', element.value);
    });

    return (handleData (riverDataArr));

}; // end of call



var handleData = function(dataArr) {


    var darr = [];
    dataArr.forEach( function (element, index, array) {
        console.log( 'time  ' + element.datee + 'height ' + element.height);
        darr.push({'time': element.date,'height': parseFloat(element.height) });

    });

    return darr;
};
try{
// Determine which timeseies
var determineWhichTimeseries = function(arr){
    var ind = undefined;
    arr.forEach ( function (element, index, array) {
        console.log(element.variable.variableDescription);
        if(element.variable.variableDescription === "Gage height, feet") {
            log.clog('DWTS: ind = ' + index);
            ind = index;
        }
    });
    //    assert(ind);
    if (ind === undefined) {
        console.log('Nope!');
        throw('No timeseries data hoo');
    }
    return ind;
};
} catch(e) {
    console.log(e);
    alert(e);
}




    
var parseDateAndTime = function(dateTime){
//  2015-12-08T02:30:00.000-08:00
// put date and time in separate entities 
    var resp = "";
   var myre = /(\d\d\d\d-\d\d-\d\d)T(\d+:\d\d:\d\d)/;
    resp = dateTime.replace(myre, "$1  $2");

    return resp;
};

buttonClick();
