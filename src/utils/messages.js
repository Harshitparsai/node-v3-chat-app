const generateMessage = (username,message)=>{
    return {
        text: message,
        createdAt: new Date().getTime(),
        username
    }
}

const generateLocationMessage = (username,url)=>{
    return {
        url : url,
        createdAt: new Date().getTime(),
        username
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}