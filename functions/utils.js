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

module.exports = {
    checkMessage
};