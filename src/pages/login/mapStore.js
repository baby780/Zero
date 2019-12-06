import {LoginAction} from "actions/actionCreator"
export const mapStateToProps =(state)=>({

})
export const mapDispatchToProps =(dispatch)=>({
     async handleAsyncLogin(username,password){
        let data = await dispatch(LoginAction(username,password));
        if(data ==1){
            this.history.push("/Bohai")
        }
    }
})