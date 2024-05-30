// models/Quiz.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  points: { type: Number, required: true },
  timeLimit: { type: Number, required: true },
  questions: [
    {
      prompt: { type: String, required: true },
      options: [
        {
          text: { type: String, required: true },
          isCorrect: { type: Boolean, required: true }
        }
      ]
    }
  ]
});

module.exports = mongoose.model('Quiz', QuizSchema);
