const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const RoomSchema = new Schema({
  room_name: String,
  created_data: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Room', RoomSchema);
