const express = require('express')
const router = express.Router()
const User=require("../model/auth.model.js")



router.post("/:id", async (req, res) => {
    try {
      const data = await User.findByIdAndUpdate(
        req.params.id,
        {
          $addToSet: {
            quizAttempted: {
              $each: [{ quizId: req.body.quizId, quizResult: req.body.quizResult }],
            },
          },
          $inc: { 
            Points: req.body.points || 0,
            totalTime: req.body.timeTaken || 0,
            totalQuizzes: 1
          }
        },
        { new: true }
      );
      res.status(200).json(data);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports =router