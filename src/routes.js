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
const SECRET_DIARY = "/secret-diary/me";
const DIARY_DETAIL = "/:id"
const EDIT_DIARY = "/:id/edit"
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
    wirte_diary: WRITE_DIARY,
    secret_diary : SECRET_DIARY,

    diaryDetail : id => {
        if(id) {
            return `/${id}`;
        } else {
            return DIARY_DETAIL;
        }
    },
    editDiary : id => {
        if(id) {
            return `/${id}/edit`;
        } else {
            return EDIT_DIARY;
        }
    },
    rank : RANK
} 

export default routes;