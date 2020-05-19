const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";
const TODO = "/todo";
const TIMER = "/timer";
const RANK = "/rank"

//user
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFIlE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//secret_diary
const SECRET_DIARY = "/secret-diary";
const DIARY_ID = "/:id"
const WRITE_DIARY = "/write-diary";


const routes = {
    home : HOME,
    login : LOGIN,
    logout : LOGOUT,
    join : JOIN,

    todo : TODO,
    timer : TIMER,
    
    user : USER,
    userDetail : USER_DETAIL,
    editProfile : EDIT_PROFIlE,
    changePassword : CHANGE_PASSWORD,

    secret_diary : SECRET_DIARY,
    wirte_diary: WRITE_DIARY,
    diaryId : id => {
        if(id) {
            return `/secret-diary/${id}`;
        } else {
            return DIARY_ID;
        }
    },
    rank : RANK
} 

export default routes;