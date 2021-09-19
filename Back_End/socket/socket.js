var { Server, Socket } = require('socket.io')
const { join_User, get_Current_User, user_Disconnect, join_user1 } = require('./dummyuser')

const initSocketServer = (server) => {
    const io = new Server(server)
    io.on("connection", (socket) => {

        socket.on('connect chat', ({ room }) => {
            socket.join(room)
        })

        socket.on('chat1', (data) => {
            const room = data.room
            io.to(room).emit('message1', {
                idUser: data.idAccount,
                username: data.username,
                message: data.message
            })
        })

        // socket.on("joinRoom", ({ username, roomname }) => {

        //     //create user
        //     const p_user = join_User(socket.id, username, roomname)
        //     console.log(socket.id, '=id user join room');
        //     socket.join(p_user.room)

        //     //display a welcome message to the user who have joined a room
        //     socket.emit('message', {
        //         userId: p_user.id,
        //         username: p_user.username,
        //         text: `Welcome ${p_user.username}`
        //     })


        //     //display a joined room message to all other room users except that particular user
        //     socket.broadcast.to(p_user.room).emit("message", {
        //         userId: p_user.id,
        //         username: p_user.username,
        //         text: `${p_user.username} has joined the chat`
        //     })

        //     //user sending message
        //     socket.on("chat", (text) => {
        //         const p_user = get_Current_User(socket.id)
        //         console.log(text, 'text');
        //         io.to(p_user.room).emit('message', {
        //             userId: p_user.id,
        //             username: p_user.username,
        //             text: text
        //         })
        //     })


        //     //when the user exits the room
        //     socket.on("disconnect", () => {
        //         const p_user = user_Disconnect(socket.id)
        //         console.log('disconnect server');
        //         if (p_user) {
        //             io.to(p_user.room).emit('message', {
        //                 userId: p_user.id,
        //                 username: p_user.username,
        //                 text: `${p_user.username} has left the room`
        //             })
        //         }
        //     })

        // })




    })

}

module.exports = initSocketServer;

// gui tin nhan (thong tin nguoi gui)
// gui len server ==> nguoi lay ve tin nhan ==> post len api tin nhan ==> goi api tin nhan ve
// mang tin nhan o font end componentdidmout se la mang tin nhan tu api, con khi nhan tin mang tin nhan font end se push them tin nhan socket va dong thoi post tin nhan len api(tam thoi)
// nhan tin nhan (thong tin nguoi nhan)

// xac dinh tin nhan giua nguoi nhan va nguoi nhan
// ==> qua id nguoi dung


