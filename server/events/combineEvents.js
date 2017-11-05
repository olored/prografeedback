const login = require('./login')
const chat = require('./chat')
const receivePrevChatData = require('./receive_prev_chat_data')
const disconnect = require('./disconnect')

module.exports = function (io, socket) {
  login(io, socket)
  chat(io, socket)
  receivePrevChatData(io, socket)
  disconnect(io, socket)
  return socket
}
