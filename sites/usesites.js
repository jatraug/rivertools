var siteArr = [
    {'siteIndex' : '12170300', 'siteName': 'STILLAGUAMISH RIVER NEAR STANWOOD, WA'},
    {'siteIndex' : '12161000', 'siteName': 'SF STILLAGUAMISH RIVER NEAR GRANITE FALLS, WA'},
    {'siteIndex' : '12179000', 'siteName': 'SKAGIT RIVER ABOVE ALMA CREEK NEAR MARBLEMOUNT, WA'},
    {'siteIndex' : '12200500', 'siteName': 'SKAGIT RIVER NEAR MOUNT VERNON, WA'},
    {'siteIndex' : '12155300', 'siteName': 'PILCHUCK RIVER NEAR SNOHOMISH, WA'},
    {'siteIndex' : '12155500', 'siteName': 'SNOHOMISH RIVER AT SNOHOMISH, WA}'}
];
siteArr.forEach(function(e,i,a) {
    console.log(e.siteIndex + "       " + e.siteName);
});
