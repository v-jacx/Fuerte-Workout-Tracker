const {Schema ,mongoose} = require('mongoose')

const Exercise = new Schema(
    {
        name: {type: String, required: true},
        info: [{type: Schema.Types.ObjectId, ref: 'Info'}],
        workoutId: {type: Schema.Types.ObjectId, ref: 'Workout', required: true},
        personalRecord: {type: String, default: '0'}    
    }
)

module.exports = mongoose.model('Exercise', Exercise)