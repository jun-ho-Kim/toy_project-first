import routes from "../routes";
import Diary from "../models/Diary";


export const secretDiary = async(req, res) => {
    try {
    const diary = await Diary.find({});
    res.render("secretDiary", {diary});
}   catch (error) {
    console.log(error);
    res.redirect("/");
}
}

export const getWrite = (req,res) => {
    res.render("writeDiary");
}

export const postWrite = async(req,res) => {
    const {
        body : {diaryTitle, diaryContent}
    } = req;
    console.log("post Write : ", diaryTitle, diaryContent);
}
    // const newvideo = await Diary.create({})