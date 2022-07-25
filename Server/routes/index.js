const {Router} = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res)=> res.send('This is root!'))

router.post('/signup', controllers.createUser);

router.post('/login', controllers.login)

router.post('/workout/:id', controllers.createWorkout)

module.exports = router;