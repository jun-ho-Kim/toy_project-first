import express from "express";
import router from "../routes";
import { getWrite, postWrite } from "../controllers/diaryController";


const globalRouter = express.Router();

globalRouter.get(router.home, (req, res) => res.render("home"));
globalRouter.get(router.login, (req, res) => res.render("login"));
globalRouter.get(router.logout);
globalRouter.get(router.join, (req,res) => res.send("회원가입"));

globalRouter.get(router.todo, (req, res) => res.render("todo"));
globalRouter.get(router.timer, (req, res) => res.render("timer"));
globalRouter.get(router.secret_diary, (req, res) => res.render("secretDiary"));
globalRouter.get(router.rank, (req, res) => res.render("rank"));

globalRouter.get(router.wirte_diary, getWrite);
globalRouter.post("/write-diary_process", postWrite);

export default globalRouter;