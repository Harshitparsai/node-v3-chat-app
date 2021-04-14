const users = []

const addUser = ({id,username,room})=>{
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if (!username || !room){
        return {
            'error': 'username and room are required'
        }
    }

    //check for existing user
    const existinguser = users.find((user)=>{ 
        return user.room == room && user.username == username
    })

    // validate username
    if(existinguser) {
        return {
            'error': 'username is in use'
        }
    }

    //store user
    const user = {id,username,room}
    users.push(user)
    return {user}

}




const removeUser = (id) => {
    const index = users.findIndex((user)=>user.id === id)
    if (index != -1)
    {
        return users.splice(index,1)[0]
    }
}




const getUser = (id) => {
    data = users.find((user)=>{
        return user.id === id
    })
    return data
}


const getUsersInRoom = (room) => {
    const data = users.filter((user)=>{
        return user.room === room
    })
    return data
}


module.exports = { 
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}