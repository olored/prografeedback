const Room = require('../models/room')

module.exports = (io, socket) => {
  socket.on('forceDisconnect', async () => {
    console.log('forceDisconnect')
    socket.disconnect()
  })
  socket.on('disconnect', async () => {
    await Room.leaveUser(socket.room, socket.userData._id, socket.id)
    io.to(socket.room).emit('logout', {
      userId: {
        nickname: socket.userData.nickname
      }
    })
    console.log('user disconnected: ' + socket.name)
  })
  return socket
}
