const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OptionSchema = new Schema({
  optionText: { type: String, required: true },
  isCorrect: { type: Boolean, required: true }
});

const QuestionSchema = new Schema({
  testId: { type: Schema.Types.ObjectId, ref: 'Test' },
  questionText: { type: String, required: true },
  options: [OptionSchema]
});

const TestSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

const Test = mongoose.model('Test', TestSchema);
const Question = mongoose.model('Question', QuestionSchema);

module.exports = { Test, Question };