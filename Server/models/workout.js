const {Schema, mongoose} = require('mongoose')
const Exercise = require('./exercise')

const Workout = new Schema(
    {
        name: {type: String, required: true},
        exercises:[Exercise]
    }
)

module.exports = mongoose.model('Workout', Workout)