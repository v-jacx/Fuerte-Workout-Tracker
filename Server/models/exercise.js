const {Schema ,mongoose} = require('mongoose')

const Exercise = new Schema(
    {
        name: {type: String, required: true},
        date: [String],
        setsReps:[String],
        maxWeight:[String]      
    }
)

module.exports = mongoose.model('Exercise', Exercise)