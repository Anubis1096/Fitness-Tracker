const express = require('express');
const path = require('path');
const db = require('../models');
const router = express.Router();

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).then((data) => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find().then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then(data => {
            res.json(data)
        }).catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id, { $push: { exercises: body } }).then(data => {
            res.json(data)
        }).catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

module.exports = router;
