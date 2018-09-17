const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Room = require('../models/Room');

/* GET ALL ROOMS */
router.get('/', (req, res, next) => {
  Room.find((err, rooms) => {
    if (err) return next(err);
    res.json(rooms);
  });
});

// Get single room by id
router.get('/:id', (req, res, next) => {
  Room.findById(req.params.id, (err, room) => {
    if (err) return next(err);
    res.json(room);
  });
});

// Save room
router.post('/', (req, res, next) => {
  Room.findByIdAndUpdate(req.params.id, req.body, (err, room) => {
    if (err) return next(err);
    res.json(room);
  });
});

// Delete a room
router.delete('/:id', (req, res, next) => {
  Room.findByIdAndRemove(req.params.id, req.body, (err, room) => {
    if (err) return next(err);
    res.json(room);
  });
});

module.exports = router;
