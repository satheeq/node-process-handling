const unzip = require('unzipper');
const fs = require('fs');
//
fs.createReadStream('./customerfile/customersList.zip')
    .pipe(unzip.Extract({ path: './file' }));


console.error('done');