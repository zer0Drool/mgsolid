const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const archiver = require('archiver');
const swears = require('./swears');

const checkMessage = message => {
    let stringToReturn = message;

    let isSwearing = swears.some(swear => stringToReturn.includes(swear));

    if (isSwearing) {
        let badWords = [];
        for (const swear of swears) {
            let regExp = new RegExp(`\\b${swear}\\b`, 'gmi');
            if (regExp.test(stringToReturn)) badWords.push(swear);
        };

        if (badWords.length) {
            for (let swear of badWords) {
                let censored = swear.split('').map((char, i) => i ? '*' : char).join('');
                stringToReturn = stringToReturn.replace(swear, censored);
            };
        };
    };

    return stringToReturn;
};

// app.post('/download', function(request, response) {

//     var icons = request.body;
//     var filename = 'icons.zip';

//     response.attachment(filename);

//     var zip = Archiver('zip');

    // zip.on('finish', function(error) {
    //   return response.end();
    // });

//     zip.pipe(response);

//     for (var i = 0; i < icons.length; i++) {

//       var icon = getIcon(icons[i]);
//       zip.append(fs.createReadStream('public/' + icon.svg), { name: icon.title + '.svg' });
//     }

//     zip.finalize();
// });

const archiveAndStreamNFTs = (NFTarray, res) => {
    console.log('archiveAndStreamNFTs');
    try {
        let filename = `${uuid.v4()}.zip`;
        let pathToAssets = path.join(__dirname + '/../downloadable_assets');

        // let tmp = path.join(__dirname + '/../tmp');
        // fs.mkdirSync(`${tmp}/${filename}`);

        let archive = archiver('zip', {
            zlib: { level: 9 }
        });

        archive.on('end', function() {
            console.log('Archive wrote %d bytes', archive.pointer());
        });

        archive.on('finish', function(error) {
            return res.end();
        });

        res.attachment(filename);

        archive.pipe(res);

        archive.append(fs.createReadStream(`${pathToAssets}/one.txt`), { name: 'hahaha.txt' });

        archive.finalize();
    } catch (error) {
        console.log('caught error in archive n stream', error);
    } finally {
        console.log('finally');
    };
};

module.exports = {
    checkMessage,
    archiveAndStreamNFTs
};