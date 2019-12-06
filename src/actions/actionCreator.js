import {ZeroAsyncType,ZeroTwoAsyncType,ZeroThressAsyncType,
    DianAsyncType,LikeAsyncType,DingAsyncType,LoginType,UpdatePhotoType} from "./actionsTypes";
import {createAction} from "redux-actions";
import {ZeroApi,ZerotwoApi,ZeroThreeApi,DianApi,LikeApi,DingApi}  from "api/Bohai.js"
import {LoginApi,updatedPhotoApi,updateInfoApi,updatedPasswordApi} from "api/loginApi";
export const LoginAction=(username,password)=>{
    let userLoginAction = createAction(LoginType,data=>data);
    return async (dispatch)=>{
            let data = await LoginApi(username,password);
            if(data.data.code==1){
                alert(data.data.info)
            localStorage.setItem("userinfo",JSON.stringify({
                name:data.data.data.name,
                unrlPic:data.data.data.urlPic,
                id:data.data.data._id
            }))
            dispatch(userLoginAction(data.data.data));

            return data.data.code
        }else{
            alert(data.data.info)
        }
    }
}
export const ZeroAsyncAction =(page_list,index)=>{
    //相当于action.types
    let ZeroAction=createAction(ZeroAsyncType,(data,index)=>({data:data,index:index}))
    return async(dispatch)=>{
        let data=await ZeroApi(page_list);
        dispatch(ZeroAction(data,index))
      
    }
}

export const ZeroTwoAsyncAction =(page_list,index)=>{
    
    let ZeroTwoAction=createAction(ZeroTwoAsyncType,(data,index)=>({data:data,index:index}))

    return async (dispatch)=>{
        let data=await ZerotwoApi(page_list);
        dispatch(ZeroTwoAction(data,index))
        
    }
}


export const ZeroThreeAsyncAction =(page_list,index)=>{
    let ZeroThreeAction=createAction(ZeroThressAsyncType,(data,index)=>({data:data,index:index}))
    return async (dispatch)=>{
        let data =await ZeroThreeApi(page_list);
        dispatch(ZeroThreeAction(data,index))
       
    }
}


export const DianAcyncAction =(id)=>{
    let DianAction=createAction(DianAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
       let data=await DianApi(id);
       dispatch(DianAction(data));
      
    }
   
   
}

export const LikeAsyncAction=()=>{
    let LikeAction=createAction(LikeAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data =await LikeApi();
        dispatch(LikeAction(data));
    }
}

export const DingAsyncAction=(page,size)=>{
    let DingAction=createAction(DingAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data =await DingApi(page,size);

        dispatch(DingAction(data));
    }
}

export const UpdatePhotoAction=(filesImg,id)=>{
    return async (dispatch)=>{
        let data = await updatedPhotoApi(filesImg,id);
        console.log(data)
    }
}
export const UpdateInfoAction = (name,id)=>{
    let userLoginAction = createAction(LoginType,data=>data);
    return async (dispatch)=>{
        let data = await updateInfoApi(name,id);
        
        dispatch(userLoginAction(data))
        return data.data.code
    }
}
export const UpdatePasswordAction = (password,id)=>{
    let userLoginAction = createAction(LoginType,data=>data);
    return async (dispatch)=>{
        let data = await updatedPasswordApi(password,id);
        dispatch(userLoginAction(data))
        return data.data.code
    }
}
