var { Server, Socket } = require('socket.io')
const { join_User, get_Current_User, user_Disconnect, join_user1 } = require('./dummyuser')

const initSocketServer = (server) => {
    const io = new Server(server)
    io.on("connection", (socket) => {
        socket.on("joinRoom", ({ username, roomname }) => {

            //create user
            const p_user = join_User(socket.id, username, roomname)
            console.log(socket.id, '=id user join room');
            socket.join(p_user.room)

            //display a welcome message to the user who have joined a room
            socket.emit('message', {
                userId: p_user.id,
                username: p_user.username,
                text: `Welcome ${p_user.username}`
            })


            //display a joined room message to all other room users except that particular user
            socket.broadcast.to(p_user.room).emit("message", {
                userId: p_user.id,
                username: p_user.username,
                text: `${p_user.username} has joined the chat`
            })

            //user sending message
            socket.on("chat", (text) => {
                const p_user = get_Current_User(socket.id)
                console.log(text, 'text');
                io.to(p_user.room).emit('message', {
                    userId: p_user.id,
                    username: p_user.username,
                    text: text
                })
            })

            socket.on("outroom", () => {
                const p_user = user_Disconnect(socket.id)
                if (p_user) {
                    io.to(p_user.room).emit('message', {
                        userId: p_user.id,
                        username: p_user.username,
                        text: `${p_user.username} has left the room`
                    })
                }
            })

            //when the user exits the room
            socket.on("disconnect", () => {
                const p_user = user_Disconnect(socket.id)
                console.log('disconnect server');
                if (p_user) {
                    io.to(p_user.room).emit('message', {
                        userId: p_user.id,
                        username: p_user.username,
                        text: `${p_user.username} has left the room`
                    })
                }
            })

        })



        // socket.on('joinChat', ({ username }) => {
        //     const p_user = join_user1(socket.id, username)
        //     console.log("co nguoi vua connect !", socket.id)



        //     socket.on('chat', function(data)  {
        //         socket.to(socket.id).emit
        //     })


        //     socket.on("outroom", () => {
        //         console.log('out');
        //         const p_user = user_Disconnect(socket.id)

        //         if (p_user) {
        //             io.to(p_user.room).emit('message', {
        //                 userId: p_user.id,
        //                 username: p_user.username,
        //                 text: `${p_user.username} has left the room`
        //             })
        //         }

        //     })

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

