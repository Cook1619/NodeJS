let fs = require('fs');
let path = require('path');

let chirps = [
    {
      chirp: 'Some random chirp',
      author: 'Chirp Smith'
    },
    {
        chirp: 'Some random chirp',
        author: 'Chirp Smith'
    },
    {
        chirp: 'Some random chirp',
        author: 'Chirp Smith'
    },
    {
        chirp: 'Some random chirp',
        author: 'Chirp Smith'
    },
    {
        chirp: 'Some random chirp',
        author: 'Chirp Smith'
    }
]
let dataPath = path.join(__dirname, '../chirp.json')

fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
    if (err) throw err;
    console.log('Chirp saved');
})
fs.readFile(dataPath, {
    encoding: "UTF-8"
}, (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
    
})