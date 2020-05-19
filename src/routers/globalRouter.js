import express from "express";
import routes from "../routes";
import { getWrite, postWrite, secretDiary } from "../controllers/diaryController";
import { upoladDiary } from "../middleware";


const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.render("home"));
globalRouter.get(routes.login, (req, res) => res.render("login"));
globalRouter.get(routes.logout);
globalRouter.get(routes.join, (req,res) => res.send("회원가입"));

globalRouter.get(routes.todo, (req, res) => res.render("todo"));
globalRouter.get(routes.timer, (req, res) => res.render("timer"));
globalRouter.get(routes.secret_diary, secretDiary);
globalRouter.get(routes.wirte_diary, getWrite);
globalRouter.post("/write-diary_process", postWrite);
// globalRouter.get(routes.diaryId(), (req, res) => res.render("diaryId"));
globalRouter.get(routes.rank, (req, res) => res.render("rank"));



export default globalRouter;