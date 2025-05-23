const path = require('path');
const { Test, Question } = require('../models/testModel');

const testCreate = async (req, res) => {
  try {
    const { title, description } = req.body;
    const test = new Test({ title, description });
    await test.save();
    res.status(201).send(test);
  } catch (error) {
    res.status(400).send(error);
  }
};

const questionCreate = async (req, res) => {
  try {
    const { testId, questionText, options } = req.body;
    const question = new Question({ testId, questionText, options });
    await question.save();
    await Test.findByIdAndUpdate(testId, { $push: { questions: question._id } });
    res.status(201).send(question);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getTestWithQuestions = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id).populate('questions');
    res.send(test);
  } catch (error) {
    res.status(400).send(error);
  }
};


module.exports = { testCreate, questionCreate, getTestWithQuestions };
