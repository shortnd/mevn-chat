const express = require('express');

const router = express.Router();
const Room = require('../models/Room');

/* GET ALL ROOMS */
router.get('/', (req, res, next) => {
  Room.find((err, rooms) => {
    if (err) return next(err);
    res.json(rooms);
  });
});

/* GET SINGLE ROOM BY ID */
router.get('/:id', (req, res, next) => {
  Room.findById(req.params.id, (err, room) => {
    if (err) return next(err);
    res.json(room);
  });
});

/* SAVE ROOM */
router.post('/', (req, res, next) => {
  Room.create(req.body, (err, room) => {
    if (err) return next(err);
    res.json(room);
  });
});

/* UPDATE ROOM */
router.put('/:id', (req, res, next) => {
  Room.findByIdAndUpdate(req.params.id, req.body, (err, room) => {
    if (err) return next(err);
    res.json(room);
  });
});

/* DELETE ROOM */
router.delete('/:id', (req, res, next) => {
  Room.findByIdAndRemove(req.params.id, req.body, (err, room) => {
    if (err) return next(err);
    res.json(room);
  });
});

module.exports = router;
