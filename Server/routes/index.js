const {Router} = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res)=> res.send('This is root!'))

router.post('/signup', controllers.createUser);

router.post('/login', controllers.login)

router.post('/workout', controllers.createWorkout)

router.post('/exercise', controllers.createExercise)

router.post('/setInfo', controllers.setInfo)

router.get('/getWorkoutsId/:id', controllers.getAllUserWorkoutIds)

router.get('/getWorkouts/:userID', controllers.getUserWorkouts)

router.get('/getWorkoutExercises/:workoutID', controllers.getExercisesInWorkout)

router.put('/updatePR', controllers.updatePR)

module.exports = router;