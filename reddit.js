const fs = require(fs);
const rp = require('request-promise');


rp('https://reddit.com/r/popular.json')
    .then((res) => {
        console.log(res);
        console.log(err);
    })