import mongoose from "mongoose";

const WeeksGoalSChema = new mongoose.Schema({
    goalTitle : {
        type : String,
        required : "title is required"
    },
    dueDate : Date,
    createdAt: {
        type : Date,
        default : Date.now
    }
});

const model = mongoose.model("Goal", WeeksGoalSChema);
export default model;