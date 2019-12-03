import {SearchContentAction} from "actions/szd_home/actionCreate"
export const mapStateToProps=(state)=>({
    searchList:state.search.searchList
})
export const mapDispatchToProps=(dispatch)=>({
    handleSearchList(value){
        dispatch(SearchContentAction(value))
    }
})