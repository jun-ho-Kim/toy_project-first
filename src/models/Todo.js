import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    todoTitle : {
        type : String,
        required : "todo Title is required"
    },
    todoDetail : String,
    dueDate: Date,
    checked: Boolean,
    priority: Number
});

const model = mongoose.model("Todo", TodoSchema);
export default model;