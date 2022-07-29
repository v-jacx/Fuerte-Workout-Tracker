const {Router} = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res)=> res.send('This is root!'))

router.post('/signup', controllers.createUser);

router.post('/login', controllers.login)

router.post('/workout', controllers.createWorkout)

router.post('/exercise', controllers.createExercise)

router.post('/setInfo', controllers.setInfo)

router.get('/workout/:id', controllers.getUserWorkouts)

router.get('/exercise/:id', controllers.getWorkoutExercises)

router.get('/user', controllers.getUser)

router.get('/info/:id', controllers.getExerciseInfo)

router.put('/updatePR', controllers.updatePR)

router.put('/signout/:id', controllers.signout)



module.exports = router;