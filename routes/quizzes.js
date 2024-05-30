// routes/quizzes.js
const express = require('express');
const router = express.Router();

const Quiz = require('../models/Quiz');

// Create a new quiz
router.post('/', async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    const quiz = await newQuiz.save();
    res.json(quiz);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get all quizzes
router.get('/', async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Add a question to a quiz
router.put('/:id/add-question', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    quiz.questions.push(req.body);
    await quiz.save();
    res.json(quiz);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete a question from a quiz
router.put('/:id/delete-question/:questionId', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    quiz.questions.id(req.params.questionId).remove();
    await quiz.save();
    res.json(quiz);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
