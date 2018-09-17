const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ChatSchema = new Schema({
  room: { type: Schema.Types.ObjectId, ref: 'Room' },
  nickname: String,
  message: String,
  created_data: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Chat', ChatSchema);
