'use strict';
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
const db = require('./db')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var http = require('http').createServer(app)
const initSocketServer = require('./socket/socket')

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

initSocketServer(http)




//custom  api userchat
app.get('/userchat', (req, res) => {
    var select = 'SELECT * FROM userchat'
    db.query(select, (err, result) => {
        if (err) throw err;
        return res.send({ err: false, data: result, message: 'list account' })
    })
})

app.get('/userchat/:id', function (req, res) {
    let account_id = req.params.id;
    if (!account_id) {
        return res.status(400).send({ error: true, message: 'method getApiById userchat error' })
    }
    db.query('SELECT * FROM userchat where idAccount =?', account_id, function (error, result) {
        if (error) throw error;
        return res.send({ error: false, data: result[0], message: 'getApiById userchat successfully' })
    })
})

app.post('/userchat', function (req, res) {
    let account = req.body;
    if (!account) {
        return res.status(400).send({ error: true, message: 'method post err' })
    }
    db.query('INSERT INTO userchat SET ?', { username: account.username, password: account.password }, function (error, result) {
        if (error) throw error
        return res.send({ error: false, data: result, message: 'post new account userchat successfully' })
    })
})

app.put('/userchat', function (req, res) {
    let account_id = req.body.idAccount;
    let account = req.body;
    if (!account || !account_id) {
        return res.status(400).send({ error: account, message: 'method put account userchat err' })
    }
    db.query('UPDATE userchat SET userchat.username = ? WHERE idAccount = ?', [account, account_id], function (error, result) {
        if (error) throw error;
        return res.send({ error: false, data: result, message: 'method update account successfully' })
    })
})

app.delete('/userchat/:id', function (req, res) {
    let id = req.params.id;
    if (!id) {
        return res.status(400).send({ error: true, message: 'method delete err' })
    }
    db.query('DELETE FROM userchat WHERE idAccount = ?', id, function (error, result) {
        if (error) throw error
        return res.send({ error: false, data: result, message: 'method delete account userchat successfully' })
    })
})




//custom api newsfeed
app.get('/newsfeed', (req, res) => {
    let select = 'SELECT  newsfeed.idNewsfeed, newsfeed.idAccount,newsfeed.title, newsfeed.isLiked , newsfeed.photo, userchat.username, userchat.avartar from userchat, newsfeed where userchat.idAccount = newsfeed.idAccount'
    db.query(select, (error, result) => {
        if (error) throw err
        return res.send({ error: false, data: result, message: 'list newsfeed' })
    })
})

app.get('/newsfeed/:id', function (req, res) {
    let newsfeed_id = req.params.id;
    if (!newsfeed_id) {
        return res.status(400).send({ error: true, message: 'method getNewsfeedById error' })
    }
    db.query('SELECT * FROM newsfeed where idNewsfeed = ?', newsfeed_id, function (error, result) {
        if (error) throw error
        return res.send({ error: false, data: result[0], message: 'get newsfeed by id successfully' })
    })
})

app.post('/newsfeed', function (req, res) {
    let newsfeed = req.body
    if (!newsfeed) {
        return res.status(400).send({ error: true, messgae: 'method post newsfeed error' })
    }
    db.query('INSERT INTO newsfeed SET ?', { idAccount: newsfeed.idAccount, title: newsfeed.title, isLiked: newsfeed.isLiked, photo: newsfeed.photo }, function (error, result) {
        if (error) throw error
        return res.send({ error: false, data: result, message: 'mothod post newsfeed successfully' })
    })
})

app.put('/newsfeed', function (req, res) {
    let newsfeeed_id = req.body.idNewsfeed;
    let newsfeed = req.body;
    if (!newsfeed || !newsfeeed_id) {
        return res.status(400).send({ error: newsfeed, message: 'method update newsfeed err' })
    }
    db.query('UPDATE newsfeed SET  ? WHERE idNewsfeed = ?', [newsfeed, newsfeeed_id], function (error, result) {
        if (error) throw error;
        return res.send({ error: false, data: result, message: 'method update account successfully' })
    })
})

app.delete('/newsfeed/:id', function (req, res) {
    let id = req.params.id;
    if (!id) {
        return res.status(400).send({ error: true, message: 'method delete err' })
    }
    db.query('DELETE FROM newsfeed WHERE idNewsfeed = ?', id, function (error, result) {
        if (error) throw error
        return res.send({ error: false, data: result, message: 'method delete newsfeed successfully' })
    })
})

//custom api thanh cuon ngang
app.get('/friend', (req, res) => {
    let select = 'SELECT  friend.idFriend, userchat.username from userchat, friend where userchat.idAccount = friend.idFriend'
    db.query(select, (error, result) => {
        if (error) throw err
        return res.send({ error: false, data: result, message: 'list friend' })
    })
})

app.get('/friend/:id', function (req, res) {
    let idFriend = req.params.id;
    if (!newsfeed_id) {
        return res.status(400).send({ error: true, message: 'method getNewsfeedById error' })
    }
    db.query('SELECT  friend.idFriend, userchat.username from userchat, friend where idFriend = ?', idFriend, function (error, result) {
        if (error) throw error
        return res.send({ error: false, data: result[0], message: 'get friend by id successfully' })
    })
})


//custom api message

app.get('/message', (req, res) => {
    let select = 'SELECT  message.idMessage, message.idUser, message.message, userchat.username from userchat, message where userchat.idAccount = message.idUser'
    db.query(select, (error, result) => {
        if (error) throw error
        return res.send({ error: false, data: result, message: 'list message' })
    })
})


app.post('/message', function (req, res) {
    let message = req.body
    if (!message) {
        return res.status(400).send({ error: true, messgae: 'method post message error' })
    }
    db.query('INSERT INTO message SET ?', { idUser: message.idUser, message: message.message }, function (error, result) {
        if (error) throw error
        return res.send({ error: false, data: result, message: 'mothod post message successfully' })
    })
})

app.put('/message', function (req, res) {
    let message_id = req.body.idMessage;
    let message = req.body;
    if (!message || !message_id) {
        return res.status(400).send({ error: newsfeed, message: 'method update message error' })
    }
    db.query('UPDATE message SET  ? WHERE idMessage = ?', [message, message_id], function (error, result) {
        if (error) throw error;
        return res.send({ error: false, data: result, message: 'method update message successfully' })
    })
})

app.delete('/message/:id', function (req, res) {
    let id = req.params.id;
    if (!id) {
        return res.status(400).send({ error: true, message: 'method delete err' })
    }
    db.query('DELETE FROM message WHERE idMessage = ?', id, function (error, result) {
        if (error) throw error
        return res.send({ error: false, data: result, message: 'method delete message successfully' })
    })
})









http.listen(3000, () => {
    console.log('sever started');
})


