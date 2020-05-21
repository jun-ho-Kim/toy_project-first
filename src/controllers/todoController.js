import routes from "../routes";
import Todo from "../models/Todo";

export const getAllTodos = async(req,res) => {
    //ascny ~ await를 사용하지 않으면 find() 함수는 늦게 작동되 데이터를 todoList라는 변수에 담을 수 없다.
    let todoList = await Todo.find((err, todos) => {
        // if(err) return res.status(404).send({error: "Todo not found"});
        console.log("getAllTodos : ", todos);
        return todos;
        });
        console.log("getAllTodos json : ", todoList.todoTitle);
        try{
            res.render("todo", {todoList});
        } catch (error) {
            console.log(error);
            res.render("todo", {todoList : []});
        }

    };
export const createTodo = async (req, res) => {
    // const todo = new Todo();
    const {
        body : {todoTitle, todoDetail, todoDueDate, checked, priority}
    } = req;
    try {
        const newTodo = await Todo.create({
            todoTitle,
            todoDetail
        })

    } catch(err) {
        console.log(error);
    }
    finally {
        res.redirect("/todo");
    }
    console.log("todo : ", todo);
    // todo.save();
}
