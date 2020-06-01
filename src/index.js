import express from "express";
import db from "./db"
import bodyParser from "body-parser"
// const express = require("express");
import {join} from "path";
import globalRouter from "./routers/globalRouter";
import dotenv from "dotenv";
import routes from "./routes";
import diaryRouter from "./routers/diaryRouter";
import todoRouter from "./routers/todoRouter";
import { localMiddleware } from "./middleware";
// import deleteModule from "./todo_module/deleteTodo";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use("/static", express.static("static"))
// app.use("/todo_module", express.static("src/todo_module"));
// ㄴ #4.3 4:34
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(localMiddleware);
 


function handleListen() {
    console.log("✅ Listen")
}

app.use("/", globalRouter);
app.use("/secret-diary/me", diaryRouter);
app.use("/todo", todoRouter);
app.listen(PORT, handleListen);