import express from "express";
import router from "../routes";


const globalRouter = express.Router();

globalRouter.get(router.home, (req, res) => res.render("home"));
globalRouter.get(router.login, (req, res) => res.render("login"));
globalRouter.get(router.logout);
globalRouter.get(router.join, (req,res) => res.send("회원가입"));

globalRouter.get(router.timer);


export default globalRouter;