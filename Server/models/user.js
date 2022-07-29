const {Schema, mongoose} = require('mongoose')
const bycrypt = require('bcrypt')

const User = new Schema(
    {
        name: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true, lowercase: true},
        workouts: [{type: Schema.Types.ObjectId, ref: 'Workout'}],
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
