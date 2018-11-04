index.html: sitesToUse.json mkindex.js
	node mkindex.js # makes index,html and riversites.js
	cat index.proto indexAdd.txt > index.html
	cp index.html riversites.js ../../herokuRiver/client

sitesWithGageHeight.txt : readsitedata.js sitedataWA.txt
	node readsitedata.js > sitesWithGageHeight.txt


sitedataWA.txt: sites.sh
	bash sites.sh

sitesToUse.json : sitesWithGageHeight.txt sortsites.js
	node sortsites.js



snohomish.txt: snohomish.sh
	bash snohomish.sh
