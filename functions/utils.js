const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const archiver = require('archiver');
const PDFDocument = require('pdfkit');
const dateformat = require('dateformat');
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

function jumpLine(doc, lines) {
    for (let index = 0; index < lines; index++) {
      doc.moveDown();
    };
};

const archiveAndStreamNFTs = async (username, nFTarray, res) => {
    let assets = path.join(__dirname + '/../downloadable_assets');
    let tmp = path.join(__dirname + '/../tmp');
    let font = path.join(__dirname + 'fonts/Pacifico.ttf');
    let map = path.join(__dirname + '/doc_assets/map.PNG');

    let docname;

    try {

        let archive = archiver('zip', {
            zlib: { level: 9 }
        });

        archive.on('end', function() {
            console.log('Archive wrote %d bytes', archive.pointer());
        });

        archive.on('finish', function(error) {
            return res.end();
        });

        res.attachment(`${username}_x_keiken.zip`);

        archive.pipe(res);

        //generate pdf
        const doc = new PDFDocument();
        docname = `${uuid.v4()}.pdf`;

        doc.pipe(fs.createWriteStream(`${tmp}/${docname}`));

        doc.font('Courier-Oblique');

        let grad = doc.linearGradient((doc.page.width / 2), 0, (doc.page.width / 2), (doc.page.height));

        grad
        .stop(0, '#000')
        .stop(1, '#808080');

        doc
        .rect(0, 0, doc.page.width, doc.page.height)
        .fill(grad);

        const distanceMargin = 10;

        doc
        .fillAndStroke('#ffffff')
        .lineWidth(1)
        .rect(
            distanceMargin,
            distanceMargin,
            doc.page.width - distanceMargin * 2,
            doc.page.height - distanceMargin * 2,
        )
        .stroke();

        jumpLine(doc, 10);

        doc.text(
            `Pokem ipsum dolor sit amet Ferrothorn Rhyhorn Masquerain Solrock Foongus Crobat. Pokemon 4Ever Shaymin Kanto Houndour Regirock Aerodactyl Pelipper. Ruby our courage will pull us through Zweilous Plusle Rare Candy Boldore Scrafty. Fire Red Leech Life Celadon Department Store you teach me and I'll teach you Mirror Move Wurmple Town Map. Blizzard Poliwhirl Alakazam Water Primeape Magneton Magikarp used Splash.`,
            {
                width: 410,
                align: 'center'
            }
        );

        doc.end();

        let date = dateformat(new Date(), 'yyyymmdd');

        archive.append(fs.createReadStream(`${tmp}/${docname}`), { name: `${username}_NFT_contract_x_keiken _${date}.pdf` });

        for (const nFT of nFTarray) {
            if (fs.existsSync(`${assets}/${nFT}.txt`)) {
                archive.append(fs.createReadStream(`${assets}/${nFT}.txt`), { name: `${nFT}.txt` });
            };
        };

        archive.finalize();
    } catch (error) {
        console.error('caught error in archive in stream', error);
        res.status(500).send('something went wrong');
    } finally {
        if (docname && fs.existsSync(`${tmp}/${docname}`)) {
            fs.unlink(`${tmp}/${docname}`, error => {
                if (error) {
                    console.error('error deleting pdf', error)
                };
            });
        };
    };
};

module.exports = {
    checkMessage,
    archiveAndStreamNFTs
};