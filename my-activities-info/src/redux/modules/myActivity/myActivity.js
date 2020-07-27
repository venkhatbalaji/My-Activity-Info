export const FETCH_ACTIVITY_INFO = 'mg/activityInfo/FETCH_ACTIVITY_INFO';
export const FETCH_ACTIVITY_INFO_ASYNC = 'mg/activityInfo/FETCH_ACTIVITY_INFO_ASYNC';
export const UPDATE_ACTIVITY_INFO = 'mg/activityInfo/UPDATE_ACTIVITY_INFO';
export const UPDATE_ACTIVITY_INFO_ASYNC = 'mg/activityInfo/UPDATE_ACTIVITY_INFO_ASYNC';

export const initialState = {
    content:[],
}

export const myActivityInfo = (state = initialState, action = {}) =>{
    switch(action.type){
        case FETCH_ACTIVITY_INFO:
            console.log(action)    
            return{
                ...state,
                content:[
                   ...action.payload.content,
                ]
            };

        default:
            return{
                ...state
            };
    }
}

export const fetchActicvityinfo = () =>{
    return{
        type: FETCH_ACTIVITY_INFO_ASYNC
    }
}

export default myActivityInfo;