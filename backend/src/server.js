const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const http = require('http');
const scoketio = require('socket.io');

mongoose.connect('mongodb+srv://onmistack:onmistack@cluster0-mzlt4.mongodb.net/aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
);

const app = express();
const server = http.Server(app);
const io = scoketio(server);

const connectedUsers = {};

io.on('connection', (socket) => {
  const { user_id } = socket.handshake.query;

  connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3030);