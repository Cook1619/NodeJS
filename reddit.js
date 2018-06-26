const fs = require('fs');
const path = require('path');
const rp = require('request-promise');

let dataPath = path.join(__dirname, './popular-articles.json')

let newArr = [];
rp('https://reddit.com/r/popular.json')
    .then((res) => {
        
        JSON.parse(res).data.children.forEach(item => {
           let dataArray = [];
           let obj= {title: item.data.title, url: item.data.url, author: item.data.author}
           dataArray = newArr.push(obj);
            fs.writeFile(dataPath, JSON.stringify(newArr) + '\n');
        });

    }).catch((err) => {
        console.log(err);
    })