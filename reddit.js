const fs = require('fs');
const path = require('path');
const rp = require('request-promise');

let dataPath = path.join(__dirname, './popular-articles.json')

rp('https://reddit.com/r/popular.json')
    .then((res) => {
       JSON.parse(res).data.children.forEach(item => {
           let newArr = [];
        //    fs.appendFileSync(dataPath, item.data.title + '\n' + item.data.url + '\n' + item.data.author);
        newArr.push(item.data.title, item.data.url, item.data.author);
              fs.appendFileSync(dataPath, newArr + '\n');
       })
        
    }).catch((err) =>{
        console.log(err);
    })