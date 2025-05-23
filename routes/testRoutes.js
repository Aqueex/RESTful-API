const express = require('express');
const {testCreate,questionCreate,getTestWithQuestions } = require('../controllers/testControllers.js');
const router = express.Router();
const { checkAuth, isAdmin } = require('../middleware/auth.js');

router.post('/testCreate', checkAuth, isAdmin, testCreate)
router.post('/questionCreate', checkAuth, isAdmin, questionCreate)
router.get('/tests/:id', checkAuth, isAdmin, getTestWithQuestions )

module.exports = router