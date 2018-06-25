const fs = require('fs');
const path = require('path');
const rp = require('request-promise');

let dataPath = path.join(__dirname, './popular-articles.json')

rp('https://reddit.com/r/popular.json')
    .then((res) => {
       JSON.parse(res).data.children.forEach(item => {
           fs.appendFileSync(dataPath, item.data.title + '\n' + item.data.url + '\n' + item.data.author);
       })
        
    }).catch((err) =>{
        console.log(err);
    })