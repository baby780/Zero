import http from "utils/request";
export const LoginApi =(username,password)=>http.post({
    url:"/users/login",
    data:{
        username,
        password
    },
    method:"POST"
})
export const updatedPhotoApi = (filesImg,id )=>http.post({
    url:"/users/modifyUserPic",
    data:{
        filesImg,
        id
    },
    method:"POST"
})
export const updateInfoApi=(name,id)=>http.post({
    url:"/users/updateInfo",
    data:{
        name,
        id
    },
    method:"POST"
})
export const updatedPasswordApi=(password,id)=>http.post({
    url:"/users/updateInfo",
    data:{
        password,
        id
    },
    method:"POST"
})