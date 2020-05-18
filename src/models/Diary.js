import mongoose from "mongoose";

const DiarySchema = new mongoose.Schema({
    fileUrl : {
        type : String,
        required : "File URL is required"
    }, 
    title : {
        type : String,
        required : "Title is require"
    },
    description : String,
    createdAt: {
        type : Date,
        default : Date.now
    }
});

const model = mongoose.model("Diary", DiarySchema);
export default model;