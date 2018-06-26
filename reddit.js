const fs = require('fs');
const path = require('path');
const rp = require('request-promise');

let dataPath = path.join(__dirname, './popular-articles.json')

rp('https://reddit.com/r/popular.json')
    .then((res) => {
        const items = 
        JSON.parse(res).data.children.map(item => {
           return {title: item.data.title, url: item.data.url, author: item.data.author}
            fs.writeFile(dataPath, JSON.stringify(items) + '\n');
        });

    }).catch((err) => {
        console.log(err);
    })