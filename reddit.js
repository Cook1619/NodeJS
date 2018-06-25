const fs = require('fs');
const rp = require('request-promise');


rp('https://reddit.com/r/popular.json')
    .then((res) => {
       JSON.parse(res).data.children.forEach(item => {
           console.log(item.data.title)
           console.log(item.data.url);
           console.log(item.data.author);
       })
        
    }).catch((err) =>{
        console.log(err);
    })