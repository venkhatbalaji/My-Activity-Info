import cookie from '../../../util/cookieHelper/cookie';


export const LOGINPAGE_LANDED = 'ma/start/LOGINPAGE_LANDED';
export const LOGINPAGE_LANDED_ASYNC = 'ma/start/LOGINPAGE_LANDED_ASYNC';

export const initialState = {
    landOnLogin: cookie.getLoggedInDetails(),
};

export const start = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGINPAGE_LANDED:
            return{
                ...state,
                landOnLogin: action.payload.landed
            }

        default:
            return state;
    }
};

export const loginPageLanded = (landed) =>{
    return{
        type: LOGINPAGE_LANDED_ASYNC,
        payload:{
            landed
        },
    };
};

export default start;