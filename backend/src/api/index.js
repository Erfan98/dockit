const express = require('express');
const faker = require('faker');
const emojis = require('./emojis');
const { body } = require('express-validator');
const crudController = require('../controllers/crud');

const router = express.Router();

router.get('/v1/task/list/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.get('/v1/task/random', (req, res) => {
  res.json([{
    
      id: 1,
      text: faker.random.words(),
      completed: false
  },
  {
      id: 2,
      text: faker.random.words(),
      completed: true
  },
  {
      id: 3,
      text: faker.random.words(),
      completed: false
  }
  ]);
});


router.get('/', (req, res) => {
    res.json({
      message: 'Team 20 API, Developed by Team 20(Mansurul Tanvir)',
      API_ENDPOINT: 'http://21wsp20pw.course.tamk.cloud/api/v1/task/list',
      Phase_1: 'Initial setup (5 p)',
      Phase_2: 'Dockerize localhost (5 p)',
      Phase_3: 'CI/CD Pipeline & Remote Server (5 p)',
      Phase_4: 'Implement the TODO app (10 p)',
      Phase_5: 'Phase 5: Testing (5 p)',
      Phase_6: 'Database (5 p)',
    });
  });

router.get('/v1/task/list/get', crudController.getAllTodos);

router.get('/v1/task/list/get/:tid', crudController.getSingleTodo);

router.post('/v1/task/list/post', [
    body('name',"Provide a valid name")
        .isLength({ min: 2})
        .trim(),
    body('status', "Provide a valid status")
        .isBoolean()
], crudController.postTodo);

router.put('/v1/task/list/put/:tid', [
    body('status', "Provide a valid status")
        .isBoolean()
], crudController.putTodo);

router.delete('/v1/task/list/delete/:tid', crudController.deleteTodo);


router.use('/emojis', emojis);

module.exports = router;
