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

fs.writeFile('chirp.json', chirps, (err) => {
    if(err) throw err;
    console.log('Chirps saved')
})