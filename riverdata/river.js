var express = require('express');
var log = require('./tools.js')('clog');
var mkgetSiteFromIndex = require('./riversites.js');
var fetch = require('node-fetch');
var fs = require('fs');

log.clogOff();

// river.js - made from old server/river.js




// react to button click
var collectRiverData = function() {

    // first date available: 10/1/2007

//    var url = 'https://waterservices.usgs.gov/nwis/iv/?sites=' + riverArr[riverIndex].siteIndex + '&period=P1D&format=json';
    var url = 'https://waterservices.usgs.gov/nwis/iv/?sites=12155500' + '&startDt=2007-10-01&format=json';
    // var request = new Request(url, {method: 'get'});
    log.clog("yup");

    //  fetch('riverdata').then(function(response) {

    fetch(url).then(function(response) {
        response.text().then(function(text) {
            var done = false;
            fs.writeFile('river.txt', text, function() {
                done = true;
            });
            while (done === false){
//                console.log ('waiting..'); // do nothing...
            }
            var rdata = doJson(text);
            log.clogOn();
            log.clog(rdata);
        });
    });
};



var doJson = function(str) {
    var riverDataArr = [];
    var riverData = JSON.parse(str);
    // Put needed river data in array:
    var ind = determineWhichTimeseries(riverData.value.timeSeries);
    log.clog("ind = " + ind);
    riverData.value.timeSeries[ind].values[0].value.forEach (function (element, index, array) {

        var dTime = parseDateAndTime(element.dateTime);
        riverDataArr.push ({date: dTime, height: element.value});
    });

    return (handleData (riverDataArr));

}; // end of call



var handleData = function(dataArr) {


    var darr = [];
    dataArr.forEach( function (element, index, array) {

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


collectRiverData();
