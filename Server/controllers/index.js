const {User, Workout, Exercise, Info} = require('../models')
const bcrypt = require('bcrypt')
const { response } = require('express')
const user = require('../models/user')


const createUser = async (req, res)=> {
    try{
        const user = await new User(req.body)
        await user.save()

        await User.findByIdAndUpdate(user._id, {loggedIn: true}, (err, result)=>{
            if(err){res.send(err)}
            else{res.send(result)}
        })

    }catch(e){
        console.log(e)
    }
}

const createWorkout = async (req, res) =>{
    try{
        const workout = new Workout(req.body)
        await workout.save()

        const user_id = workout.userId

        const user = await User.findByIdAndUpdate(user_id, {$push: {workouts: workout._id}})

        return res.status(200).json(workout)
        
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

        return res.status(200).json({exercise})

    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

const setInfo = async (req, res)=>{
    try{
        const info = new Info(req.body)
        await info.save()

        const exercise_id = info.exerciseId

        await Exercise.findByIdAndUpdate(exercise_id, {$push: {info: info._id}})


        return res.status(200).json('info saved')

    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

const getUserWorkouts = async (req, res)=>{
    try{
    const {id} = req.params
    const user = await User.findById(id)
    const workouts = user.workouts
    const userWorkouts = []

    for(let i=0; i< workouts.length; i++){
        const workout = await Workout.findById(workouts[i])
        userWorkouts.push(workout)
    }

    return res.status(200).json({userWorkouts})
    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

const getWorkoutExercises= async (req, res)=>{
    try{
        const {id} = req.params
        const workout = await Workout.findById(id)
        const workoutsExercises = workout.exercises
        const exercises = []

        for(let i=0; i< workoutsExercises.length; i++){
            const exercise = await Exercise.findById(workoutsExercises[i])
            exercises.push(exercise)
        }

        return res.status(200).json({exercises})
    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

const getExerciseInfo = async(req, res)=>{
    try{
        const {id} = req.params
        const exercise = await Exercise.findById(id)
        const infoID = exercise.info
        const info = []

        for(let i=0; i< infoID.length; i++){
            const currentInfo = await Info.findById(infoID[i])
            info.push(currentInfo)
        }
        res.status(200).json({info})
    }catch(e){
        res.status(500).json({error: e.message})
    }
}

const updatePR = async (req, res)=>{
   try{ 
        const {id, personalR} = req.body
        Exercise.findByIdAndUpdate(id, {personalRecord: personalR},(err, result)=>{
            if(err){console.log(err)}
            else{res.send(result)}
        })

}catch(e){
    console.log(e)
}

}

const getUser = async (req, res)=>{
   try{
        const user = await User.find({'name': req.query.name})
        return res.status(200).json({user})
   }catch(e){
    return res.status(500).json({error: e.message})
   }
}

const login = async (req, res)=>{
    
    
    try{
        const user = await User.findOne({'name': req.body.name})
        if(user){              
            if( await bcrypt.compare(req.body.password, user.password)){
                const id = user._id
                await User.findByIdAndUpdate(id, {loggedIn: true}, (err, result)=>{
                    if(err){res.send(err)}
                    else{res.send(result)}})}
                else{
                res.send('Incorrect Password')
            }}else{res.send('User Does not exist')}
    }catch(e){
       console.log(e)
    }
}

const signout = async (req, res)=>{
    try{
        const {id} = req.params
        await User.findByIdAndUpdate(id, {loggedIn: false}, (err, result)=>{
            if(err){res.send(err)}
            else{res.send(result)}
        })
    }catch(e){console.log(e)}
}


module.exports = {
    createUser, login, createWorkout, createExercise, setInfo, getUserWorkouts, getWorkoutExercises, updatePR, getUser, getExerciseInfo, signout,
}
