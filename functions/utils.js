const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const archiver = require('archiver');
const dateformat = require('dateformat');
const onFinished = require('on-finished');

const PDFDocument = require("pdfkit");

// const {
//     jsPDF
// } = require('jspdf');
// const {
//     callAddFont
// } = require('./Gruppo-Regular-normal');

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

function generateDoc(doc) {
    let map = path.join(__dirname + '/doc_assets/map.jpg');
    let font = path.join(__dirname + '/fonts/Gruppo-Regular.ttf');

    doc.registerFont('Main', font);

    let grad = doc.linearGradient((doc.page.width / 2), 0, (doc.page.width / 2), (doc.page.height));

    grad
    .stop(0, '#000')
    .stop(0.5, '#000')
    .stop(1, '#808080');

    doc
    .rect(0, 0, doc.page.width, doc.page.height)
    .fill(grad);

    doc.rect(0, 0, doc.page.width, doc.page.height).fill(grad);

    doc
    .fillAndStroke('#fff')
    .lineWidth(1)
    .rect(10, 10, doc.page.width - 20, doc.page.height - 20)
    .stroke();

    doc.image(map, doc.page.width - 160, 30, { width: 120 });

    doc
    .font('Main')
    .fontSize(25)
    .text('Some text with an embedded font!', 100, 100)
    .fontSize(18)
    .text('PNG and JPEG images:')
};

const archiveAndStreamNFTs = async (username, nFTarray, res) => {
    let assets = path.join(__dirname + '/../downloadable_assets');
    let tmp = path.join(__dirname + '/../tmp');

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

        docname = `${uuid.v4()}.pdf`;

        let doc = new PDFDocument({ margin: 50 });
        doc.pipe(fs.createWriteStream(`${tmp}/${docname}`));

        generateDoc(doc, username, nFTarray);

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
        onFinished(res, error => {
            if (docname && fs.existsSync(`${tmp}/${docname}`)) {
                fs.unlink(`${tmp}/${docname}`, error => {
                    if (error) {
                        console.error('error deleting pdf', error)
                    };
                });
            };
        });
    };
};

module.exports = {
    checkMessage,
    archiveAndStreamNFTs
};