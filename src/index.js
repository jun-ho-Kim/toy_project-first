import express from "express";

// const express = require("express");
import {join} from "path";
import globalRouter from "./routers/globalRouter";

const app = express();


app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));



function handleListen() {
    console.log("✅ Listen")
}

app.use("/", globalRouter);
app.get("/todo", (req, res) => res.send("todo"));
app.get("/timer", (req, res) => res.send("timer"));
app.get("/secretDiary", (req, res) => res.send("secret Diary"))
app.get("/rank", (req, res) => res.send("rank"))
app.listen(4000, handleListen);