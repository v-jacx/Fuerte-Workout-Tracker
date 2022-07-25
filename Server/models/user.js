const {Schema, mongoose} = require('mongoose')
const Workout = require ('./workout')
const bycrypt = require('bcrypt')

const User = new Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true, lowercase: true},
        workouts: [Workout],
        password: {type: String, minLength: [8, 'Password must have atleast 6 characters']},
        loggedIn: {type: Boolean, default: false}
    },
    {timestamps: true}
)

User.pre('save', async function (next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bycrypt.hash(this.password, 10)
}) 


module.exports = mongoose.model('User', User)
