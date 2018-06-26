const fs = require('fs');
const path = require('path');
const rp = require('request-promise');

let dataPath = path.join(__dirname, './popular-articles.json')

rp('https://reddit.com/r/popular.json')
    .then((res) => {

        JSON.parse(res).data.children.forEach(item => {
            let newObj = { title: item.data.title, url: item.data.url, author: item.data.author }
            let newArr = [];
            newArr.push(newObj);
            fs.appendFileSync(dataPath, JSON.stringify(newArr) + '\n');
        })

    }).catch((err) => {
        console.log(err);
    })