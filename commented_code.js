
// function jumpLine(doc, lines) {
//     for (let index = 0; index < lines; index++) {
//         doc.moveDown();
//     };
// };

// function generateDoc(doc, username, whatToken) {
//     let map = path.join(__dirname + '/doc_assets/map.jpg');
//     let regFont = path.join(__dirname + '/fonts/Gudea-Regular.ttf');
//     let boldFont = path.join(__dirname + '/fonts/Gudea-Bold.ttf');
//     let italicFont = path.join(__dirname + '/fonts/Gudea-Italic.ttf');

//     try {
//         doc.registerFont('regular', regFont);
//         doc.registerFont('bold', boldFont);
//         doc.registerFont('italic', italicFont);

//         let w = doc.page.width;
//         let h = doc.page.height;
//         let c = {continued: true};
//         let m = 40;

//         doc
//         .fontSize(32)
//         .font('regular').text('PIECES OF ME : ', c)
//         .font('bold').text('WISDOM TOKEN');

//         doc.fontSize(13);

//         jumpLine(doc, 2);

//         doc.font('bold').text('MORAL CONTRACT ', c)
//         .font('regular').text('& ', c)
//         .font('bold').text('CERTIFICATE OF CARE');

//         jumpLine(doc, 1);

//         doc.font('bold').text('INTRODUCTION');
//         doc.font('regular').text('TRANSFER & Keiken are pleased to offer you this/these free, downloadable copy/copies of a Wisdom Token to collect, connect with, and cherish for as long as you can. We hope that those who want to experience the metaverse might take a piece with them, as all are welcome in this reality.');
//         jumpLine(doc, 1);
//         doc.font('regular').text('In this case financial value is removed from an exchange placing morality as a currency to consider non-superficial structures to hold and value each other as accountable civilians of the universe and metaverse.');

//         jumpLine(doc, 1);

//         doc.font('bold').text('ABOUT ', c)
//         .font('regular').text('THIS ', c)
//         .font('bold').text('DOCUMENT');
//         doc.font('regular').text('This document constitutes a moral contract, which protects the work from harm and confers duty of care to the collector/downloader. It is not a financial contract, ownership contract, or any other kind of non-fungible token that might confer such meaning.');

//         jumpLine(doc, 1);

//         doc.font('bold').text('WISDOM TOKEN ACQUISITION');
//         doc.font('regular').text('We are offering infinitely replicable versions of our Wisdom Tokens for free to seed an accessible space for people to participate in collecting art. We believe artists need more support, sustainability and accessibility as the ability to create and imagine the future is of highest value.  When systems change, we are given the opportunity to evolve, connecting the past and present wisdom to create future wisdom together. In order to do this, we cannot leave anyone behind.');
//         jumpLine(doc, 1);
//         doc.font('regular').text('Alongside this we are connecting the Wisdom Tokens to a smart moral contract as a tool of care. We are handing you this tool and it is your choice what you would like to absorb from this.');
//         jumpLine(doc, 1);
//         doc.font('regular').text('To purchase the unique 1 + 1AP edition of a token and obtain contracted ownership, please contact director@transafergallery.com');

//         jumpLine(doc, 1);

//         doc.font('bold').text('RIGHTS ', c)
//         .font('regular').text('OF THE ', c)
//         .font('bold').text('ARTIST');
//         doc.font('regular').text('Keiken, and those individuals identified as Keiken Collaborators, maintain exclusive intellectual property ownership over the work, and do so in perpetuity, regardless of how ubiquitously the tokens spread.');

//         jumpLine(doc, 1);

//         doc.font('bold').text('OBLIGATIONS ', c)
//         .font('regular').text('OF THE ', c)
//         .font('bold').text('COLLECTOR');
//         doc.font('regular').text('The collector acknowledges their responsibility to ensure proper care of this work, in the way that best fits their own understanding of care. The responsibility for any harm, violence, or immoral use of each token is assumed by the token downloader.');

//         jumpLine(doc, 1);

//         doc.font('bold').text('RESTRICTIONS ', c)
//         .font('regular').text('ON THE ', c)
//         .font('bold').text('COLLECTOR');
//         doc.font('regular').text('This work has no financial value and may not be sold. This document is not a certificate of authenticity, or a non-fungible token--it is a moral contract that ensures your ongoing care of the token as its collector. This Wisdom Token may not be altered, manipulated, compressed, damaged, harmed, or otherwise miscontextualized. This freely downloadable token may not be sold or monetized in any way whatsoever, forever.');

//         jumpLine(doc, 1);

//         doc.font('bold').text('RIGHTS ', c)
//         .font('regular').text('OF THE ', c)
//         .font('bold').text('COLLECTOR');
//         doc.font('regular').text('The collector may display, share, ponder, love, cherish, examine, play with, and otherwise allow the work to become a part of them. It will always be yours, even if it is just a fragment of something else, and it will always symbolize your connection to the metaverse. We hope that you will care for it like you might care for a treasured family heirloom, and preserve its physical and spiritual integrity for as long as you live. We welcome you to join the metaverse community, and become a part of our ecosystem of compassion.');

//         jumpLine(doc, 1);

//         doc.font('bold').text('GUIDELINES FOR CONSERVATION');
//         doc.font('regular').text('By collecting this token, the collector agrees to read and follow archival preservation guidelines included with purchase, so that it may be maintained in perpetuity. The collector must accept the responsibilities that this entails. For instance, If the 3D file is stored on decentralized nodes, such as the InterPlanetary File System (IPFS),  the collector will ensure that the nodes are maintained. If the collector stores their token on an external hard drive, they agree to migrate work to a new hard drive every 3-5 years in standard digital conservation practice. We hope that you will tuck this token into a special corner of your virtual inventory, and look on it fondly in your own micro-metaverse.');
//         jumpLine(doc, 1);
//         doc.font('regular').text('For all questions and assistance inquiries regarding the Rights and Obligations of the collector please contact Wade Wallerstein at director@transfergallery.com.');

//         jumpLine(doc, 8);

//         doc.font('regular').text('**By signing below, you certify that you understand, agree to, and promise to uphold the Collector Rights & Obligations Detailed Above**',
//             {
//                 width: w - 100,
//                 align: 'center'
//             }
//         );

//         doc
//         .fillAndStroke('#000')
//         .lineWidth(1)
//         .rect(50, h - 130, w - 100, 0)
//         .stroke();

//         doc.addPage();

//         // doc
//         // .font('bold')
//         // .fontSize(15)
//         // .text('Moral Contract - wisdomforlove3.0', m, m + 20);

//         // doc
//         // .font('italic')
//         // .fontSize(15)
//         // .text('Moral Contract - wisdomforlove3.0', m, m + 40);

//         // let grad = doc.linearGradient((doc.page.width / 2), 0, (doc.page.width / 2), (doc.page.height));

//         // grad
//         // .stop(0, '#000')
//         // .stop(0.8, '#000')
//         // .stop(1, '#808080');
//         // doc
//         // .rect(0, 0, doc.page.width, doc.page.height)
//         // .fill(grad);
//         // doc.rect(0, 0, doc.page.width, doc.page.height).fill(grad);



//         // // doc.image(map, doc.page.width - 220, 20, { width: 200 });

//         // doc
//         // .image(map, doc.page.width - 231, 21, {fit: [210, 123]})
//         // .fillAndStroke('#fff')
//         // .lineWidth(1)
//         // .rect(doc.page.width - 230, 20, 211, 124)
//         // .stroke();

//         // doc
//         // .font('Main')
//         // .fontSize(18)
//         // .text('Moral Contract - wisdomforlove3.0', 20, 20);

//         // doc
//         // .font('Main')
//         // .fontSize(14)
//         // .text(`user identity: ${username}`, 20, 70)
//         // .text(`given the question, you chose ${whatToken ? 'yes' : 'no'}`, 20, 90);

//         return true;
//     } catch (error) {
//         console.log('error generating pdf', error);
//         return false;
//     };
// };