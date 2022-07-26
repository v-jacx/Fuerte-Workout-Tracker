const {User, Workout, Exercise, Info} = require('../models')
const bcrypt = require('bcrypt')
const { response } = require('express')
const user = require('../models/user')


const createUser = async (req, res)=> {
    try{
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user,
        })
    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

const createWorkout = async (req, res) =>{
    try{
        const workout = new Workout(req.body)
        await workout.save()

        const user_id = workout.userId

        const user = await User.findByIdAndUpdate(user_id, {$push: {workouts: workout._id}})

        return res.status(201).json(workout)
        
    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

const createExercise = async (req, res) =>{
    try{
        const exercise = new Exercise(req.body)
        await exercise.save()

        const workout_id = exercise.workoutId

        const workout = await Workout.findByIdAndUpdate(workout_id, {$push: {exercises: exercise._id}})

        return res.status(201).json({exercise})

    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

const setInfo = async (req, res)=>{
    try{
        const info = new Info(req.body)
        await info.save()

        const exercise_id = info.exerciseId

        const exercise = await Exercise.findByIdAndUpdate(exercise_id, {$push: {info: info._id}})


        return res.status(201).json('info saved')

    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

const getAllUserWorkoutIds = async (req, res)=>{
    try{
    const {id} = req.params
    const user = await User.findById(id)

    const workouts = user.workouts
    
    return res.status(201).json({workouts})
}catch(e){
    res.status(500).json({error: e.message})
}
}

const getUserWorkouts = async (req, res)=>{
    try{
    const workouts = await Workout.find({userId: req.params.userID})

    return res.status(201).json({workouts})
    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

const getExercisesInWorkout = async (req, res)=>{
    try{
        const exercises = await Exercise.find({workoutId: req.params.workoutID})

        return res.status(201).json({exercises})
    }catch(e){
        return res.status(500).json({error: e.message})
    }
}


const login = async (req, res)=>{

        const user = await User.find({'name': req.body.name})
        if(user === null){
            res.send('user does not exist')
        }    
        try{
            if( await bcrypt.compare(req.body.password, user[0].password)){
                await User.findByIdAndUpdate(user[0]._id, {loggedIn: true}, (err, result)=>{
                    if(err){res.send(err)}
                    else{res.send(result)}
                })
                res.send('logged in')
            }else{
                res.send('Incorrect Password')
            }
    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

const updatePR = async (req, res)=>{
   try{ 
        const {id, personalR} = req.body
        Exercise.findByIdAndUpdate(id, {personalRecord: personalR},(err, result)=>{
            if(err){res.send(err)}
            else{res.send(result)}
        })

        res.status(201).json('updated')
}catch(e){
    return res.status(500).json({error: e.message})
}

}

module.exports = {
    createUser, login, createWorkout, createExercise, setInfo, getAllUserWorkoutIds, getUserWorkouts, getExercisesInWorkout, updatePR,
}
