import axios from "axios";
// import Goal from  ".../src/models"
const weeksGoalScreen = document.querySelectorAll(".js-goalScreen");
const goalForm = document.getElementById("js-goalForm");
const goalInput  = goalForm.querySelector(".js-goalInput");

const weeksGoalArray = Array.prototype.slice.call(weeksGoalScreen);
// console.log("weeksGoalScreen.length : ", weeksGoalScreen);
// console.log("weeksGoalArray : ", weeksGoalArray);
//header , todo
const addGoal = async text => {
    // const li = document.createElement("li");
    console.log("addGoal");
    console.log(text);
    console.log("weeksGoalScreen : ",weeksGoalScreen);
    console.log("weeksGoalArray : ", weeksGoalArray);
    // for(i=0; i<weeksGoalScreen.length; i++) {
    //     weeksGoalArray[i].innerHTML = text;
    // }
    weeksGoalScreen.forEach(list => list.innerText = text);
    console.log("weeksGoalScreen2 : ",weeksGoalScreen);
    console.log("weeksGoalArray2 : ", weeksGoalArray);
    // li.appendChild(weeksGoalScreen);
}


const handleSumit = async(event) => {
    event.preventDefault();

    const weeksGoal = goalInput.value;
    console.log("weeksGoal : ", weeksGoal)
    try{
    // const response = await axios({
    // url : `/todo/weeks-goals`,
    // method : "POST",
    // data : {
    //     weeksGoal
    // }
// });
    // console.log("response:",response);
    // console.log("response.data.data:",response.data.data);
    addGoal(weeksGoal);
    } catch(error) {
        console.log(error);
    }
}

// for(i=0; weeksGoalArray.length; i ++) {
//     weeksGoalArray[i].innerText = "토끼 달린다.";
// };
// weeksGoalScreen.innerHTML = "거북이 달린다.";
console.log("goals");

function init() {
if(goalForm) {

goalForm.addEventListener("input", handleSumit);
console.log("goalssss");
} else {
    console.log("error");
    console.log(error);
}
}
init();