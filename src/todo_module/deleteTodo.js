// const delBtn = document.getElementById("js-deleteButton");

// function handleDelBtn (event) {
//     console.log("1")
//     // fetch(``)
// }
// if(delBtn) {
//     delBtn.addEventListener("click", handleDelBtn);
// }
export default delBtn;
export const delBtnModule = (req,res, next) => {
    const delBtn = document.getElementById("js-deleteButton");
    function handleDelBtn (event) {
        console.log("1")
        // fetch(``)
    }
if(delBtn) {
    delBtn.addEventListener("click", handleDelBtn);
}
next();
}