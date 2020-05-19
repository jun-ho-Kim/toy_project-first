import express from "express";
import routes from "../routes";
import { secretDiary, diaryDetail, postEditDiary, getEditDiary } from "../controllers/diaryController";

const diaryRouter = express.Router();

// diaryRouter.get(routes.secret_diary, secretDiary);
diaryRouter.get(routes.diaryDetail(), diaryDetail);
diaryRouter.get(routes.editDiary(), getEditDiary);
diaryRouter.post(routes.editDiary(), postEditDiary);
export default diaryRouter;