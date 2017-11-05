let mongoose = require('mongoose')
let Schema = mongoose.Schema

let roomSchema = new Schema({
  ppt: {
    type: String
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'user'
  },
  thumbnail: {
    type: String
  },
  conversations: [
    {userId: Schema.ObjectId, nickname: String, body: String, date: Date}
  ],
  users: [
    {
      userId: {
        type: Schema.ObjectId,
        ref: 'user'
      },
      socketId: String,
      date: Date
    }
  ],
  created_at: {type: Date, default: Date.now}
})

class Room {
  static add (ppt, owner) {
    return new Promise((resolve, reject) => {
      new this({
        ppt,
        owner
      }).save((err, result) => {
        if (err) {
          reject(new Error(err))
        }
        resolve(result)
      })
    })
  }

  static async enterUser (roomId, userId, socketId) {
    this.update(
      {_id: roomId},
      {
        $push: {
          'users': {
            userId,
            socketId
          }
        }
      },
      (err, result) => {
        if (err) console.log(err)
        return Promise.resolve(result)
      }
    )
  }

  static async leaveUser (roomId, userId, socketId) {
    this.update(
      {_id: roomId},
      {
        $pull: {
          'users': {
            userId,
            socketId
          }
        }
      },
      (err, result) => {
        if (err) console.log(err)
        return Promise.resolve(result)
      }
    )
  }
}

roomSchema.loadClass(Room)

module.exports = mongoose.model('room', roomSchema)
