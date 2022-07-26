const {Schema ,mongoose} = require('mongoose')

const Info = new Schema(
    {
        date: {type: String, required: true},
        sets_reps: {type: String, required: true},
        maxWeight: {type: String, required: true},
        exerciseId: {type: Schema.Types.ObjectId, ref: "Exercise", required: true}
    }
)

module.exports = mongoose.model('Info', Info)