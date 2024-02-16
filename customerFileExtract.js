const node7z = require('node-7z');
const sevenZipBin = require('7zip-bin');

let zip = node7z.extractFull('./customerfile/customersList.zip', './customerfile', {
    $bin: sevenZipBin.path7za
});

zip.on('end', function () {
    // resolve({fileName: 'extracted', status: 1});
    console.error('file unzipped completed');
});

zip.on('error', (err) => {
    // reject({fileName: 'extracted', status: 0});
    console.error('error in unzipping file', err);
});


console.error('executed');