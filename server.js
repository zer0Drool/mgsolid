const express = require('express');
// const os = require('os');
// const geoip = require('geoip-lite');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const {
    checkMessage
} = require('./functions/utils');

// const device = require('express-device');
// app.use(device.capture());

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

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/wisdomsforlove', (req, res) => {
    res.sendFile(__dirname + '/wisdomsforlove.html');
});

app.get('*', (req, res) => {
    res.redirect('/');
});

server.listen(process.env.PORT || 8080, () => console.log(`mgsolid bb...`));
