const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Chat = require('../models/Chat');

// Get ALL CHATS
router.get('/', (req, res, next) => {
  Chat.find((err, chats) => {
    if (err) return next(err);
    res.json(chats);
  });
});

// GET SINGLE CHAT BY ID
router.get('/:id', (req, res, next) => {
  Chat.findById(req.params.id, (err, chat) => {
    if (err) return next(err);
    res.json(chat);
  });
});

// SAVE CHAT
router.post('/', (req, res, next) => {
  Chat.create(req.body, (err, chat) => {
    if (err) return next(err);
    res.json(chat);
  });
});

// DELETE CHAT
router.delete('/:id', (req, res, next) => {
  Chat.findByIdAndRemove(req.params.id, req.body, (err, chat) => {
    if (err) return next(err);
    res.json(chat);
  });
});

module.exports = router;
