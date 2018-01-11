#!/bin/bash

# must run dos2unix after changes.

curl  -o sitedata.txt  https://waterservices.usgs.gov/nwis/iv/?stateCd=WA\&format=json 

node readsitedata.js
