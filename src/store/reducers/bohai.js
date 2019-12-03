import { handleActions } from "redux-actions";
import { ZeroAsyncType, ZeroTwoAsyncType, ZeroThressAsyncType,DianAsyncType,LikeAsyncType,DingAsyncType} from "actions/actionsTypes"

const defaultState = {
    Zero: [],
    ZeroTwo: [],
    ZeroThree: [],
    add: "0",


    Sort:[],
    Goods:[],

    Like:[],

    Ding:[]

}

export default handleActions({
    [ZeroAsyncType]: (state, action) => {
        let zeroState = JSON.parse(JSON.stringify(state));
        zeroState.Zero = action.payload.data.data.data;
        zeroState.add=action.payload.index;
        var _empty=null;
        switch (zeroState.add) {
            case 0:
                return zeroState;
            case 1:
               
                for (var i = 0; i < zeroState.Zero.length - 1; i++) {
                    for (var n = zeroState.Zero.length - 1; n > i; n--) {
                        if (zeroState.Zero[n].info.state == "0") {
                            _empty = zeroState.Zero[n];
                            zeroState.Zero[n] = zeroState.Zero[n - 1];
                            zeroState.Zero[n - 1] = _empty;
                        }
                    }
                }
                break;
            case 2:
                for (var i = 0; i < zeroState.Zero.length - 1; i++) {
                    for (var n = zeroState.Zero.length - 1; n > i; n--) {
                        if (zeroState.Zero[n].info.month_total > zeroState.Zero[n - 1].info.month_total) {
                            _empty = zeroState.Zero[n];
                            zeroState.Zero[n] = zeroState.Zero[n - 1];
                            zeroState.Zero[n - 1] = _empty;
                        }
                    }
                }
                break;
            }
        return zeroState

    },
    [ZeroTwoAsyncType]: (state, action) => {
        let zerotwoState = JSON.parse(JSON.stringify(state));
        zerotwoState.ZeroTwo = action.payload.data.data.data;
        zerotwoState.add=action.payload.index;
        var _empty=null;
        switch (zerotwoState.add) {
            case 0:
                return zerotwoState;
            case 1:
               
                for (var i = 0; i < zerotwoState.ZeroTwo.length - 1; i++) {
                    for (var n = zerotwoState.ZeroTwo.length - 1; n > i; n--) {
                        if (zerotwoState.ZeroTwo[n].info.state == "0") {
                            _empty = zerotwoState.ZeroTwo[n];
                            zerotwoState.ZeroTwo[n] = zerotwoState.ZeroTwo[n - 1];
                            zerotwoState.ZeroTwo[n - 1] = _empty;
                        }
                    }
                }
                break;
            case 2:
                for (var i = 0; i < zerotwoState.ZeroTwo.length - 1; i++) {
                    for (var n = zerotwoState.ZeroTwo.length - 1; n > i; n--) {
                        if (zerotwoState.ZeroTwo[n].info.month_total > zerotwoState.ZeroTwo[n - 1].info.month_total) {
                            _empty = zerotwoState.ZeroTwo[n];
                            zerotwoState.ZeroTwo[n] = zerotwoState.ZeroTwo[n - 1];
                            zerotwoState.ZeroTwo[n - 1] = _empty;
                        }
                    }
                }
                break;
            }
        return zerotwoState;
    },
    [ZeroThressAsyncType]: (state, action) => {
        let zerothreeState = JSON.parse(JSON.stringify(state));
        zerothreeState.ZeroThree = action.payload.data.data.data;
        zerothreeState.add=action.payload.index;
        var _empty=null;
        switch (zerothreeState.add) {
            case 0:
                return zerothreeState;
            case 1:
               
                for (var i = 0; i < zerothreeState.ZeroThree.length - 1; i++) {
                    for (var n = zerothreeState.ZeroThree.length - 1; n > i; n--) {
                        if (zerothreeState.ZeroThree[n].info.state == "0") {
                            _empty = zerothreeState.ZeroThree[n];
                            zerothreeState.ZeroThree[n] = zerothreeState.ZeroThree[n - 1];
                            zerothreeState.ZeroThree[n - 1] = _empty;
                        }
                    }
                }
                break;
            case 2:
                for (var i = 0; i < zerothreeState.ZeroThree.length - 1; i++) {
                    for (var n = zerothreeState.ZeroThree.length - 1; n > i; n--) {
                        if (zerothreeState.ZeroThree[n].info.month_total > zerothreeState.ZeroThree[n - 1].info.month_total) {
                            _empty = zerothreeState.Zero[n];
                            zerothreeState.ZeroThree[n] = zerothreeState.ZeroThree[n - 1];
                            zerothreeState.ZeroThree[n - 1] = _empty;
                        }
                    }
                }
                break;
            }
        return zerothreeState;
    },
    [DianAsyncType]: (state,action)=>{
        let DianState=JSON.parse(JSON.stringify(state));
        DianState.Sort=action.payload.data.data.sort;
        DianState.Goods=action.payload.data.data.goods;
/* 
        let Like=[
            {
                value: '125098',
                label: '暖冬必备',
            
            children:[{
                label: 'All Foods',
                value: '1',
                disabled: false,
               
             }]

            }
        ] */
        // console.log(DianState.Goods);
        //console.log(DianState.Sort);
        //goods_sort_id
        
        // for(let n=0;n<DianState.Sort.length;n++){
        //     for(let i=0;i<DianState.Goods.length;i++){
        //         if(DianState.Sort[n].goods_sort_id==DianState.Goods[i].goods_sort_id){
        //             DianState.Like.push({value:DianState.Sort[n].goods_sort_id,label:DianState.Sort[n].goods_sort_name,children:[{
        //                 label:DianState.Goods[i].goods_name

        //             }]})
        //         }
        //     }
            
        // }
        //  console.log(DianState.Goods[0])
        // console.log(DianState.Like);
        return DianState

    },
    [LikeAsyncType]:(state,action)=>{
        let LikeState=JSON.parse(JSON.stringify(state));
        LikeState.Like=action.payload.data.data.data;
        return LikeState
    },
    [DingAsyncType]:(state,action)=>{
        let DingState=JSON.parse(JSON.stringify(state));
        DingState.Ding=action.payload.data.data;
        return DingState;
    }
}, defaultState)
