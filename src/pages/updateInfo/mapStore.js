import {UpdatePhotoAction,UpdatePasswordAction,UpdateInfoAction} from "actions/actionCreator"
export const mapStateToProps = (state) => ({

})
export const mapDispatchToProps = (dispatch) => ({
    handlegetBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    },
    handleUpdatePhoto(filesImg,id){
        // console.log(filesImg,id)
        dispatch(UpdatePhotoAction(filesImg,id))
    },
    UpdateInfoAction(name,id){
        dispatch(UpdateInfoAction(name,id))
    },
     async UpdatePasswordAction(password,id){
         let data = await dispatch(UpdatePasswordAction(password,id))
         return data
    }
})