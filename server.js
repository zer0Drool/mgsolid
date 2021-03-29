const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const server = require('http').Server(app);
const io = require('socket.io')(server);

const {
    checkMessage,
    archiveAndStreamNFTs
} = require('./functions/utils');

// const device = require('express-device');
// app.use(device.capture());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));

io.on('connection', (socket) => {
    socket.on('new', data => {
        socket.broadcast.emit('newUserJoined', {user: data.user})
    });

    socket.on('message', data => {
        let trimmed = data.text.trim().replace(/<|>/g, '');
        if (!trimmed.length) return;

        io.emit('newChatMessage', {
            text: checkMessage(trimmed),
            user: data.user,
            id: data.id
        });
    });
});

app.get('/hub', (req, res) => {
    res.sendFile(__dirname + '/hub.html');
});

app.get('/wisdomsforlove', (req, res) => {
    res.sendFile(__dirname + '/wisdomsforlove.html');
});

app.get('/download-tokens', (req, res) => {
console.log('made it to download tokens');
    if (!req.query.username) {
        res.status(400).send('invalid username');
    } else {
        archiveAndStreamNFTs(req.query.username, req.query.nFTarray, res);
    };
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('*', (req, res) => {
    res.redirect('/');
});

server.listen(process.env.PORT || 8080, () => console.log(`mgsolid bb...`));
