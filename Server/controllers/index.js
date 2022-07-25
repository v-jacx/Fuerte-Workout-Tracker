const {User, Workout, Exercise} = require('../models')
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

const createWorkout = async (req, res) =>{
    try{
        const workout = new Workout(req.body)
        await workout.save()

        user.workouts.push(workout._id);

        return res.status(201).json({user})
        
    }catch(e){
        return res.status(500).json({error: e.message})
    }
}

module.exports = {
    createUser, login, createWorkout
}