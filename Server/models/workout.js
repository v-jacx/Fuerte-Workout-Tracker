const {Schema, mongoose} = require('mongoose')

const WorkoutSchema = new Schema(
    {
        name: {type: String, required: true},
        exercises:[{type: Schema.Types.ObjectId, ref: 'Exercise'}],
        userId: {type: Schema.Types.ObjectId, ref: 'User', required: true}
    }
)

module.exports = mongoose.model('Workout', WorkoutSchema)