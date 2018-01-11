function printobj(obj) {
    console.log('printobj begin');
    for(var property in obj) {

        console.log(property + ': ' + obj[property]);
    };
    console.log('printobj end');
}


var zz = {"name":"ns1:timeSeriesResponseType","declaredType":"org.cuahsi.waterml.TimeSeriesResponseType","scope":"javax.xml.bind.JAXBElement$GlobalScope","value":{"queryInfo":{"queryURL":"http://waterservices.usgs.gov/nwis/iv/sites=12194000&period=P1D&format=json","criteria":{"locationParam":"[ALL:12194000]","variableParam":"ALL","parameter":[]},"note":[{"value":"[ALL:12194000]","title":"filter:sites"},{"value":"[mode=PERIOD, period=P1D, modifiedSince=null]","title":"filter:timeRange"},{"value":"methodIds=[ALL]","title":"filter:methodId"},{"value":"2017-11-30T21:00:02.261Z","title":"requestDT"},{"value":"6ef7a140-d611-11e7-904f-6cae8b6642ea","title":"requestId"},{"value":"Provisional data are subject to revision. Go to http://waterdata.usgs.gov/nwis/help/?provisional for more information.","title":"disclaimer"},{"value":"sdas01","title":"server"}]},"timeSeries":[{"sourceInfo":{"siteName":"SKAGIT RIVER NEAR CONCRETE, WA","siteCode":[{"value":"12194000","network":"NWIS","agencyCode":"USGS"}],"timeZoneInfo":{"defaultTimeZone":{"zoneOffset":"-08:00","zoneAbbreviation":"PST"},"daylightSavingsTimeZone":{"zoneOffset":"-07:00","zoneAbbreviation":"PDT"},"siteUsesDaylightSavingsTime":true},"geoLocation":{"geogLocation":{"srs":"EPSG:4326","latitude":48.52428059,"longitude":-121.770974},"localSiteXY":[]},"note":[],"siteType":[],"siteProperty":[{"value":"ST","name":"siteTypeCd"},{"value":"17110007","name":"hucCd"},{"value":"53","name":"stateCd"},{"value":"53057","name":"countyCd"}]},"variable":{"variableCode":[{"value":"00060","network":"NWIS","vocabulary":"NWIS:UnitValues","variableID":45807197,"default":true}],"variableName":"Streamflow, ft&#179;/s","variableDescription":"Discharge, cubic feet per second","valueType":"Derived Value","unit":{"unitCode":"ft3/s"},"options":{"option":[{"name":"Statistic","optionCode":"00000"}]},"note":[],"noDataValue":-999999.0,"variableProperty":[],"oid":"45807197"},"values":[{"value":[{"value":"29500","qualifiers":["P"],"dateTime":"2017-11-29T13:15:00.000-08:00"},{"value":"29100","qualifiers":["P"],"dateTime":"2017-11-29T13:30:00.000-08:00"},{"value":"29100","qualifiers":["P"],"dateTime":"2017-11-29T13:45:00.000-08:00"},{"value":"29000","qualifiers":["P"],"dateTime":"2017-11-29T14:00:00.000-08:00"},{"value":"28200","qualifiers":["P"],"dateTime":"2017-11-29T14:15:00.000-08:00"},{"value":"28400","qualifiers":["P"],"dateTime":"2017-11-29T14:30:00.000-08:00"},{"value":"28200","qualifiers":["P"],"dateTime":"2017-11-29T14:45:00.000-08:00"},{"value":"28500","qualifiers":["P"],"dateTime":"2017-11-29T15:00:00.000-08:00"},{"value":"28100","qualifiers":["P"],"dateTime":"2017-11-29T15:15:00.000-08:00"},{"value":"28200","qualifiers":["P"],"dateTime":"2017-11-29T15:30:00.000-08:00"},{"value":"27800","qualifiers":["P"],"dateTime":"2017-11-29T15:45:00.000-08:00"},{"value":"28000","qualifiers":["P"],"dateTime":"2017-11-29T16:00:00.000-08:00"},{"value":"27500","qualifiers":["P"],"dateTime":"2017-11-29T16:15:00.000-08:00"},{"value":"27500","qualifiers":["P"],"dateTime":"2017-11-29T16:30:00.000-08:00"},{"value":"26800","qualifiers":["P"],"dateTime":"2017-11-29T16:45:00.000-08:00"},{"value":"26900","qualifiers":["P"],"dateTime":"2017-11-29T17:00:00.000-08:00"},{"value":"26500","qualifiers":["P"],"dateTime":"2017-11-29T17:15:00.000-08:00"},{"value":"26500","qualifiers":["P"],"dateTime":"2017-11-29T17:30:00.000-08:00"},{"value":"26400","qualifiers":["P"],"dateTime":"2017-11-29T17:45:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-29T18:00:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-29T18:15:00.000-08:00"},{"value":"26100","qualifiers":["P"],"dateTime":"2017-11-29T18:30:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-29T18:45:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-29T19:00:00.000-08:00"},{"value":"26400","qualifiers":["P"],"dateTime":"2017-11-29T19:15:00.000-08:00"},{"value":"26500","qualifiers":["P"],"dateTime":"2017-11-29T19:30:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-29T19:45:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-29T20:00:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-29T20:15:00.000-08:00"},{"value":"26500","qualifiers":["P"],"dateTime":"2017-11-29T20:30:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-29T20:45:00.000-08:00"},{"value":"26700","qualifiers":["P"],"dateTime":"2017-11-29T21:00:00.000-08:00"},{"value":"27000","qualifiers":["P"],"dateTime":"2017-11-29T21:15:00.000-08:00"},{"value":"26700","qualifiers":["P"],"dateTime":"2017-11-29T21:30:00.000-08:00"},{"value":"27000","qualifiers":["P"],"dateTime":"2017-11-29T21:45:00.000-08:00"},{"value":"27000","qualifiers":["P"],"dateTime":"2017-11-29T22:00:00.000-08:00"},{"value":"27400","qualifiers":["P"],"dateTime":"2017-11-29T22:15:00.000-08:00"},{"value":"27000","qualifiers":["P"],"dateTime":"2017-11-29T22:30:00.000-08:00"},{"value":"26800","qualifiers":["P"],"dateTime":"2017-11-29T22:45:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-29T23:00:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-29T23:15:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-29T23:30:00.000-08:00"},{"value":"27100","qualifiers":["P"],"dateTime":"2017-11-29T23:45:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-30T00:00:00.000-08:00"},{"value":"26700","qualifiers":["P"],"dateTime":"2017-11-30T00:15:00.000-08:00"},{"value":"26700","qualifiers":["P"],"dateTime":"2017-11-30T00:30:00.000-08:00"},{"value":"26800","qualifiers":["P"],"dateTime":"2017-11-30T00:45:00.000-08:00"},{"value":"26900","qualifiers":["P"],"dateTime":"2017-11-30T01:00:00.000-08:00"},{"value":"26700","qualifiers":["P"],"dateTime":"2017-11-30T01:15:00.000-08:00"},{"value":"26800","qualifiers":["P"],"dateTime":"2017-11-30T01:30:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-30T01:45:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-30T02:00:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-30T02:15:00.000-08:00"},{"value":"26500","qualifiers":["P"],"dateTime":"2017-11-30T02:30:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-30T02:45:00.000-08:00"},{"value":"26400","qualifiers":["P"],"dateTime":"2017-11-30T03:00:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-30T03:15:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-30T03:30:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-30T03:45:00.000-08:00"},{"value":"26000","qualifiers":["P"],"dateTime":"2017-11-30T04:00:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-30T04:15:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-30T04:30:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-30T04:45:00.000-08:00"},{"value":"26400","qualifiers":["P"],"dateTime":"2017-11-30T05:00:00.000-08:00"},{"value":"26100","qualifiers":["P"],"dateTime":"2017-11-30T05:15:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-30T05:30:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-30T05:45:00.000-08:00"},{"value":"25900","qualifiers":["P"],"dateTime":"2017-11-30T06:00:00.000-08:00"},{"value":"26100","qualifiers":["P"],"dateTime":"2017-11-30T06:15:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-30T06:30:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-30T06:45:00.000-08:00"},{"value":"26100","qualifiers":["P"],"dateTime":"2017-11-30T07:00:00.000-08:00"},{"value":"26100","qualifiers":["P"],"dateTime":"2017-11-30T07:15:00.000-08:00"},{"value":"26400","qualifiers":["P"],"dateTime":"2017-11-30T07:30:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-30T07:45:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-30T08:00:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-30T08:15:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-30T08:30:00.000-08:00"},{"value":"26400","qualifiers":["P"],"dateTime":"2017-11-30T08:45:00.000-08:00"},{"value":"26000","qualifiers":["P"],"dateTime":"2017-11-30T09:00:00.000-08:00"},{"value":"26000","qualifiers":["P"],"dateTime":"2017-11-30T09:15:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-30T09:30:00.000-08:00"},{"value":"26100","qualifiers":["P"],"dateTime":"2017-11-30T09:45:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-30T10:00:00.000-08:00"},{"value":"26000","qualifiers":["P"],"dateTime":"2017-11-30T10:15:00.000-08:00"},{"value":"26600","qualifiers":["P"],"dateTime":"2017-11-30T10:30:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-30T10:45:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-30T11:00:00.000-08:00"},{"value":"26100","qualifiers":["P"],"dateTime":"2017-11-30T11:15:00.000-08:00"},{"value":"26200","qualifiers":["P"],"dateTime":"2017-11-30T11:30:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-30T11:45:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-30T12:00:00.000-08:00"},{"value":"26300","qualifiers":["P"],"dateTime":"2017-11-30T12:15:00.000-08:00"}],"qualifier":[{"qualifierCode":"P","qualifierDescription":"Provisional data subject to revision.","qualifierID":0,"network":"NWIS","vocabulary":"uv_rmk_cd"}],"qualityControlLevel":[],"method":[{"methodDescription":"","methodID":151437}],"source":[],"offset":[],"sample":[],"censorCode":[]}],"name":"USGS:12194000:00060:00000"},{"sourceInfo":{"siteName":"SKAGIT RIVER NEAR CONCRETE, WA","siteCode":[{"value":"12194000","network":"NWIS","agencyCode":"USGS"}],"timeZoneInfo":{"defaultTimeZone":{"zoneOffset":"-08:00","zoneAbbreviation":"PST"},"daylightSavingsTimeZone":{"zoneOffset":"-07:00","zoneAbbreviation":"PDT"},"siteUsesDaylightSavingsTime":true},"geoLocation":{"geogLocation":{"srs":"EPSG:4326","latitude":48.52428059,"longitude":-121.770974},"localSiteXY":[]},"note":[],"siteType":[],"siteProperty":[{"value":"ST","name":"siteTypeCd"},{"value":"17110007","name":"hucCd"},{"value":"53","name":"stateCd"},{"value":"53057","name":"countyCd"}]},"variable":{"variableCode":[{"value":"00065","network":"NWIS","vocabulary":"NWIS:UnitValues","variableID":45807202,"default":true}],"variableName":"Gage height, ft","variableDescription":"Gage height, feet","valueType":"Derived Value","unit":{"unitCode":"ft"},"options":{"option":[{"name":"Statistic","optionCode":"00000"}]},"note":[],"noDataValue":-999999.0,"variableProperty":[],"oid":"45807202"},"values":[{"value":[{"value":"21.92","qualifiers":["P"],"dateTime":"2017-11-29T13:15:00.000-08:00"},{"value":"21.83","qualifiers":["P"],"dateTime":"2017-11-29T13:30:00.000-08:00"},{"value":"21.83","qualifiers":["P"],"dateTime":"2017-11-29T13:45:00.000-08:00"},{"value":"21.81","qualifiers":["P"],"dateTime":"2017-11-29T14:00:00.000-08:00"},{"value":"21.64","qualifiers":["P"],"dateTime":"2017-11-29T14:15:00.000-08:00"},{"value":"21.68","qualifiers":["P"],"dateTime":"2017-11-29T14:30:00.000-08:00"},{"value":"21.62","qualifiers":["P"],"dateTime":"2017-11-29T14:45:00.000-08:00"},{"value":"21.70","qualifiers":["P"],"dateTime":"2017-11-29T15:00:00.000-08:00"},{"value":"21.61","qualifiers":["P"],"dateTime":"2017-11-29T15:15:00.000-08:00"},{"value":"21.62","qualifiers":["P"],"dateTime":"2017-11-29T15:30:00.000-08:00"},{"value":"21.54","qualifiers":["P"],"dateTime":"2017-11-29T15:45:00.000-08:00"},{"value":"21.58","qualifiers":["P"],"dateTime":"2017-11-29T16:00:00.000-08:00"},{"value":"21.48","qualifiers":["P"],"dateTime":"2017-11-29T16:15:00.000-08:00"},{"value":"21.48","qualifiers":["P"],"dateTime":"2017-11-29T16:30:00.000-08:00"},{"value":"21.32","qualifiers":["P"],"dateTime":"2017-11-29T16:45:00.000-08:00"},{"value":"21.33","qualifiers":["P"],"dateTime":"2017-11-29T17:00:00.000-08:00"},{"value":"21.24","qualifiers":["P"],"dateTime":"2017-11-29T17:15:00.000-08:00"},{"value":"21.25","qualifiers":["P"],"dateTime":"2017-11-29T17:30:00.000-08:00"},{"value":"21.23","qualifiers":["P"],"dateTime":"2017-11-29T17:45:00.000-08:00"},{"value":"21.18","qualifiers":["P"],"dateTime":"2017-11-29T18:00:00.000-08:00"},{"value":"21.17","qualifiers":["P"],"dateTime":"2017-11-29T18:15:00.000-08:00"},{"value":"21.15","qualifiers":["P"],"dateTime":"2017-11-29T18:30:00.000-08:00"},{"value":"21.17","qualifiers":["P"],"dateTime":"2017-11-29T18:45:00.000-08:00"},{"value":"21.19","qualifiers":["P"],"dateTime":"2017-11-29T19:00:00.000-08:00"},{"value":"21.23","qualifiers":["P"],"dateTime":"2017-11-29T19:15:00.000-08:00"},{"value":"21.24","qualifiers":["P"],"dateTime":"2017-11-29T19:30:00.000-08:00"},{"value":"21.26","qualifiers":["P"],"dateTime":"2017-11-29T19:45:00.000-08:00"},{"value":"21.21","qualifiers":["P"],"dateTime":"2017-11-29T20:00:00.000-08:00"},{"value":"21.27","qualifiers":["P"],"dateTime":"2017-11-29T20:15:00.000-08:00"},{"value":"21.25","qualifiers":["P"],"dateTime":"2017-11-29T20:30:00.000-08:00"},{"value":"21.28","qualifiers":["P"],"dateTime":"2017-11-29T20:45:00.000-08:00"},{"value":"21.30","qualifiers":["P"],"dateTime":"2017-11-29T21:00:00.000-08:00"},{"value":"21.36","qualifiers":["P"],"dateTime":"2017-11-29T21:15:00.000-08:00"},{"value":"21.29","qualifiers":["P"],"dateTime":"2017-11-29T21:30:00.000-08:00"},{"value":"21.35","qualifiers":["P"],"dateTime":"2017-11-29T21:45:00.000-08:00"},{"value":"21.36","qualifiers":["P"],"dateTime":"2017-11-29T22:00:00.000-08:00"},{"value":"21.46","qualifiers":["P"],"dateTime":"2017-11-29T22:15:00.000-08:00"},{"value":"21.35","qualifiers":["P"],"dateTime":"2017-11-29T22:30:00.000-08:00"},{"value":"21.31","qualifiers":["P"],"dateTime":"2017-11-29T22:45:00.000-08:00"},{"value":"21.28","qualifiers":["P"],"dateTime":"2017-11-29T23:00:00.000-08:00"},{"value":"21.28","qualifiers":["P"],"dateTime":"2017-11-29T23:15:00.000-08:00"},{"value":"21.28","qualifiers":["P"],"dateTime":"2017-11-29T23:30:00.000-08:00"},{"value":"21.39","qualifiers":["P"],"dateTime":"2017-11-29T23:45:00.000-08:00"},{"value":"21.27","qualifiers":["P"],"dateTime":"2017-11-30T00:00:00.000-08:00"},{"value":"21.30","qualifiers":["P"],"dateTime":"2017-11-30T00:15:00.000-08:00"},{"value":"21.30","qualifiers":["P"],"dateTime":"2017-11-30T00:30:00.000-08:00"},{"value":"21.32","qualifiers":["P"],"dateTime":"2017-11-30T00:45:00.000-08:00"},{"value":"21.33","qualifiers":["P"],"dateTime":"2017-11-30T01:00:00.000-08:00"},{"value":"21.30","qualifiers":["P"],"dateTime":"2017-11-30T01:15:00.000-08:00"},{"value":"21.32","qualifiers":["P"],"dateTime":"2017-11-30T01:30:00.000-08:00"},{"value":"21.26","qualifiers":["P"],"dateTime":"2017-11-30T01:45:00.000-08:00"},{"value":"21.28","qualifiers":["P"],"dateTime":"2017-11-30T02:00:00.000-08:00"},{"value":"21.28","qualifiers":["P"],"dateTime":"2017-11-30T02:15:00.000-08:00"},{"value":"21.24","qualifiers":["P"],"dateTime":"2017-11-30T02:30:00.000-08:00"},{"value":"21.27","qualifiers":["P"],"dateTime":"2017-11-30T02:45:00.000-08:00"},{"value":"21.23","qualifiers":["P"],"dateTime":"2017-11-30T03:00:00.000-08:00"},{"value":"21.27","qualifiers":["P"],"dateTime":"2017-11-30T03:15:00.000-08:00"},{"value":"21.26","qualifiers":["P"],"dateTime":"2017-11-30T03:30:00.000-08:00"},{"value":"21.18","qualifiers":["P"],"dateTime":"2017-11-30T03:45:00.000-08:00"},{"value":"21.12","qualifiers":["P"],"dateTime":"2017-11-30T04:00:00.000-08:00"},{"value":"21.21","qualifiers":["P"],"dateTime":"2017-11-30T04:15:00.000-08:00"},{"value":"21.18","qualifiers":["P"],"dateTime":"2017-11-30T04:30:00.000-08:00"},{"value":"21.18","qualifiers":["P"],"dateTime":"2017-11-30T04:45:00.000-08:00"},{"value":"21.22","qualifiers":["P"],"dateTime":"2017-11-30T05:00:00.000-08:00"},{"value":"21.15","qualifiers":["P"],"dateTime":"2017-11-30T05:15:00.000-08:00"},{"value":"21.19","qualifiers":["P"],"dateTime":"2017-11-30T05:30:00.000-08:00"},{"value":"21.17","qualifiers":["P"],"dateTime":"2017-11-30T05:45:00.000-08:00"},{"value":"21.11","qualifiers":["P"],"dateTime":"2017-11-30T06:00:00.000-08:00"},{"value":"21.16","qualifiers":["P"],"dateTime":"2017-11-30T06:15:00.000-08:00"},{"value":"21.17","qualifiers":["P"],"dateTime":"2017-11-30T06:30:00.000-08:00"},{"value":"21.17","qualifiers":["P"],"dateTime":"2017-11-30T06:45:00.000-08:00"},{"value":"21.16","qualifiers":["P"],"dateTime":"2017-11-30T07:00:00.000-08:00"},{"value":"21.16","qualifiers":["P"],"dateTime":"2017-11-30T07:15:00.000-08:00"},{"value":"21.22","qualifiers":["P"],"dateTime":"2017-11-30T07:30:00.000-08:00"},{"value":"21.17","qualifiers":["P"],"dateTime":"2017-11-30T07:45:00.000-08:00"},{"value":"21.19","qualifiers":["P"],"dateTime":"2017-11-30T08:00:00.000-08:00"},{"value":"21.20","qualifiers":["P"],"dateTime":"2017-11-30T08:15:00.000-08:00"},{"value":"21.19","qualifiers":["P"],"dateTime":"2017-11-30T08:30:00.000-08:00"},{"value":"21.22","qualifiers":["P"],"dateTime":"2017-11-30T08:45:00.000-08:00"},{"value":"21.13","qualifiers":["P"],"dateTime":"2017-11-30T09:00:00.000-08:00"},{"value":"21.14","qualifiers":["P"],"dateTime":"2017-11-30T09:15:00.000-08:00"},{"value":"21.20","qualifiers":["P"],"dateTime":"2017-11-30T09:30:00.000-08:00"},{"value":"21.16","qualifiers":["P"],"dateTime":"2017-11-30T09:45:00.000-08:00"},{"value":"21.20","qualifiers":["P"],"dateTime":"2017-11-30T10:00:00.000-08:00"},{"value":"21.14","qualifiers":["P"],"dateTime":"2017-11-30T10:15:00.000-08:00"},{"value":"21.27","qualifiers":["P"],"dateTime":"2017-11-30T10:30:00.000-08:00"},{"value":"21.17","qualifiers":["P"],"dateTime":"2017-11-30T10:45:00.000-08:00"},{"value":"21.18","qualifiers":["P"],"dateTime":"2017-11-30T11:00:00.000-08:00"},{"value":"21.16","qualifiers":["P"],"dateTime":"2017-11-30T11:15:00.000-08:00"},{"value":"21.18","qualifiers":["P"],"dateTime":"2017-11-30T11:30:00.000-08:00"},{"value":"21.21","qualifiers":["P"],"dateTime":"2017-11-30T11:45:00.000-08:00"},{"value":"21.19","qualifiers":["P"],"dateTime":"2017-11-30T12:00:00.000-08:00"},{"value":"21.20","qualifiers":["P"],"dateTime":"2017-11-30T12:15:00.000-08:00"}],"qualifier":[{"qualifierCode":"P","qualifierDescription":"Provisional data subject to revision.","qualifierID":0,"network":"NWIS","vocabulary":"uv_rmk_cd"}],"qualityControlLevel":[],"method":[{"methodDescription":"","methodID":151438}],"source":[],"offset":[],"sample":[],"censorCode":[]}],"name":"USGS:12194000:00065:00000"}]},"nil":false,"globalScope":true,"typeSubstituted":false};

printobj(zz);