function commentSocket(io) {
  io.on('connection', (socket) => {
    socket.on('join_room', (data) => {
      socket.join(data);
    })

    socket.on('send_comment', (data) => {
      socket.to(data.room).emit('receive_comment', data);
    })
  })
}

export default commentSocket;