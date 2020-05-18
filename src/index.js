import express from "express";
import db from "./db"
import bodyParser from "body-parser"
// const express = require("express");
import {join} from "path";
import globalRouter from "./routers/globalRouter";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 


function handleListen() {
    console.log("✅ Listen")
}

app.use("/", globalRouter);
app.listen(PORT, handleListen);