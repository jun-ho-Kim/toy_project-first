import routes from "../routes";
import Diary from "../models/Diary";


export const secretDiary = async(req, res) => {
    try {
    const diary = await Diary.find({});
    res.render("secretDiary", {diary});
}   catch (error) {
    console.log(error);
    res.render("secretDiary", {diary : []});
}
}

export const getWrite = (req,res) => {
    res.render("writeDiary");
}

export const postWrite = async(req,res) => {
    const {
        body : {diaryTitle, diaryContent}
    } = req;
    const newDiary = await Diary.create({
        title : diaryTitle,
        content: diaryContent
    })
    console.log("newDiary.id:", newDiary.id);
    res.redirect(routes.diaryId(newDiary.id))

}
    // const newvideo = await Diary.create({})