const arr_users = []

function join_User(id, username, room) {
    const p_user = { id, username, room }

    arr_users.push(p_user)
    console.log(arr_users, "arr user server");

    return p_user
}

function join_user1(id, username) {
    const p_user = { id, username }

    arr_users.push(p_user)
    console.log(arr_users.length, 'size');
    return p_user
}

console.log('arr user out server', arr_users);

function get_Current_User(id) {
    return arr_users.find((p_user) => p_user.id === id)
}

function user_Disconnect(id) {
    const index = arr_users.findIndex((p_user) => p_user.id === id)

    if (index !== -1) {
        return arr_users.splice(index, 1)[0]
    }
}

module.exports = {
    join_user1,
    join_User,
    get_Current_User,
    user_Disconnect
}
