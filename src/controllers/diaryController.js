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
    res.redirect(`secret-diary/me/${newDiary.id}`)
}

export const diaryDetail = async (req, res) => {
    console.log("req.params : ", req.params);
    const {
        params : {id}
    } = req;
    try {
    const diary = await Diary.findById(id);
    // console.log("id : ",diary)
    res.render("diaryDetail", {diary});
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
}

export const getEditDiary = async (req, res) => {
    const {
        params : {id}
    } = req;
    const diary = await Diary.findById(id);
    res.render("editDiary", {diary})
}

export const postEditDiary = async (req, res) => {
    const {
        body : {diaryTitle : title , diaryContent : content},
        params : {id}
    } = req;
    // console.log("editDiary: title", title);
    // console.log("editDiary: diaryTitle", diaryTitle);
    // console.log("editDiary: diaryContent", diaryContent);
    try {
        await Diary.findOneAndUpdate({id}, {title, content});
        res.redirect(`/secret-diary/me/${id}`);
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
}
    // const newvideo = await Diary.create({})