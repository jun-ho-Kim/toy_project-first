import routes from "../routes";
import Todo from "../models/Todo";
import Goal from "../models/ThisWeeksGoal";
// import delBtn from "../todo_module/deleteTodo"

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
        console.log("newTodo: ", newTodo);

    } catch(err) {
        console.log(err);
    }
    finally {
        res.redirect("/todo");
    }
    console.log("todo : ", todo);
    // todo.save();
};

export const getEditTodo = async (req, res) => {
    //이제 CSS하기
    //CSS 먼저 하는 이유
    //ㄴ 더 이상 코드가 복잡지고 나중에 CSS를 하면 복잡해질까봐
    //ㄴ Todo를 수정 할 때 /edit 페이지에서 수정한는 것이 아닌
    //   /Todo 에서 직접 수정하는것(ex/ pop창, SHOW CLASS 적용해서 rendering 안하고 수정)
}

export const deleteTodo = async (req, res) => {
    const {
        params : {id}
    } = req;
    await Todo.findByIdAndDelete({_id:id});
    res.redirect("/")
}
    // let data = await getWeeksGoal(weeksGoalRenewal)
    // res.render("todo");
    // console.log("get data : ", data);
// }

export const getWeeksGoals = async(req, res) => {
    res.render("todo");
}

export const postWeeksGoals = async(req, res) => {
    const {
        body : {goalTitle}
    } =req;
    try{
        console.log("weeksGoal : ", goalTitle)
        const goal = await Goal.create({
            goalTitle
        });  
        console.log(goal)
    } catch (error){
        console.log(error);
        res.status(400);
    } finally {
        res.redirect(`/todo`);
    }
    
    // let data = await getWeeksGoal(weeksGoalRenewal)
    // console.log("data : ", data)
    // const weeksGoalScreen = document.querySelectorAll(".js-goalScreen");
    // weeksGoalArray = Array.prototype.slice.call(weeksGoalScreen);
    // const {
        // body : {weeksGoalRenewal : editGoal}
    // } = req;
    // weeksGoalArray.innerHTML = editGoal;

}