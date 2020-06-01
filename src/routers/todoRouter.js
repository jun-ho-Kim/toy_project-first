import express from "express";
import routes from "../routes";
import {createTodo, deleteTodo, postWeeksGoals, getWeeksGoals } from "../controllers/todoController";

const todoRouter = express.Router();
// todoRouter.get(routes.todo,getAllTodos);
// todoRouter.post(routes.todo, createTodo);
// todoRouter.get(routes.todo, (req,res) => res.render("todo"));
todoRouter.post(routes.editTodo())
todoRouter.post(routes.deleteTodo(), deleteTodo);

todoRouter.get(routes.thisWeeksGoals, getWeeksGoals);
todoRouter.post(routes.thisWeeksGoals, postWeeksGoals);
export default todoRouter;